import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductImage } from "./";
import { User } from "src/auth/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'products'})
export class Product {

    @ApiProperty({
        example: '18953670-01b6-4a2e-aa00-3df583b817ea',
        description: 'Product ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('uuid')
    id!: string; //

    @ApiProperty({
        example: 'T-Producto tienda',
        description: 'Product Title',
        uniqueItems: true
    })
    @Column('text', {
        unique: true,
    })
    title!: string //

    @ApiProperty({
        example: 99.99,
        description: 'Product Price',
        default: 0
    })
    @Column('float', {
        default: 0
    })
    price!: number; //

    @ApiProperty({
        example: 'Introducing the Tesla Chill Collection. The Men Chill Crew Neck Sweatshirt has a premium',
        description: 'Product Description',
        default: null
    })
    @Column({
        type: 'text',
        nullable: true
    })
    description?: string; //

    @ApiProperty({
        example: 'T-producto_slug',
        description: 'Product Slug',
        uniqueItems: true
    })
    @Column('text', {
        unique: true
    })
    slug!: string //

    @ApiProperty({
        example: 10,
        description: 'Product Stock',
        default: 0
    })
    @Column('int', {
        default: 0
    })
    stock!: number; //

    // @ApiProperty({
    //     example: ['XL','XXL','M'],
    //     description: 'Product Price',
    // })
    // @Column('text', {
    //     array: true
    // })
    // sizes!: string[];

    @ApiProperty({
        example: ['ptr','perfil_ventana','angulo','solera'],
        description: 'Product type',
    })
    @Column({
        type: 'text',
        nullable: false
    })
    category!: string;

    @ApiProperty()
    @Column('text', {
        array: true,
        default: []
    })
    type?: string[];

    @ApiProperty()
    @Column('text', {
        array: true,
        default: []
    })
    specs!: string[];

    @ApiProperty()
    @Column('text', {
        array: true,
        default: []
    })
    tags?: string[];

    @ApiProperty()
    @OneToMany(
        () => ProductImage,
        ( productImage ) => productImage.product,
        { cascade: true, eager: true }
    )
    images?: ProductImage[];

    @ManyToOne(
        () => User,
        ( user ) => user.product,
        { eager: true }
    )
    user!: User

    @BeforeInsert()
    checkSlugInsert() {
        if (!this.slug) {
            this.slug = this.title;
        }

        this.slug = this.slug
            .toLowerCase()
            .replaceAll(' ', '_')
            .replaceAll("'", '')
    }

    @BeforeUpdate()
    checkSlugUpdate() {
        this.slug = this.slug
            .toLowerCase()
            .replaceAll(' ', '_')
            .replaceAll("'", '')
    }

}
