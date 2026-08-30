import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {

  private readonly userRepository: Repository<User>;
  // private readonly jwtService: JwtService

  constructor(
    @InjectRepository(User)
    userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ) {
    this.userRepository = userRepository
  }

  async create( createUserDto: CreateUserDto ) {

    try {

      const { password, ...userData } = createUserDto;

      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync( password, 10 )
      });
      
      await this.userRepository.save( user );
       const{password: pass, ...userInfo} = user;
      
      return {
      ...user,
      token: this.getJwtToken({ id: user.id })
    };

    } catch ( error ) {
      this.handleDBErrors(error);
    }

  }

  private getJwtToken( payload: JwtPayload ) {
    const token = this.jwtService.sign( payload );
    return token;
  }
  
  async checkAuthStatus( user: User ) {

    return {
      ...user,
      token: this.getJwtToken({ id: user.id })
    }
  }

  private handleDBErrors( error: any ): never {
    if (error.code === '23505') {
      throw new BadRequestException( error.detail );
    }
    console.log(error)
    throw new InternalServerErrorException('Plase check server logs');
  }

  async login(loginUserDto: LoginUserDto) {
    
    const { password, email } = loginUserDto;
    const user = await this.userRepository.findOne({
      where: { email },
      select: { email: true, password: true, id: true }
    });

    if(!user) throw new UnauthorizedException('Credentials are not valid (email)');
    if(!bcrypt.compareSync(password, user.password)) throw new UnauthorizedException('Credentials are not valid (password)');

    // console.log({ user });

    return {
      ...user,
      token: this.getJwtToken({ id: user.id })
    };

  }

}
