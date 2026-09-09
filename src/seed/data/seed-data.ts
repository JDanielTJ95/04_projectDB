import * as bcrypt from 'bcrypt';

interface SeedProduct {
  description: string; //
  images: string[]; //
  stock: number; //
  price: number; //
  specs: string[]; //!
  slug: string; //
  tags: string[]; //
  title: string; //
  category: ValidCategory; //?
  type: ValidTypes[]; //?
}

export type ValidCategory = 'perfiles'|'tubulares'|'laminas'|'consumibles'|'herrajes'|'cerrajeria'|'herramientas'|'pedidos';
export type ValidTypes = 'ptr'|'perfil_ventana'|'angulo'|'solera'|'varilla'|'tubo'|'lamina'|'placa'|'electrodo'|'disco'|'bisagra'|'cerradura'|'quimico'|'maquinaria';

interface SeedUser {
  email: string;
  fullName: string;
  password: string;
  roles: string[];
}

interface SeedData {
  users: SeedUser[];
  products: SeedProduct[];
}



export const initialData: SeedData = {

  users: [
        {
            email: "test1@google.com",
            fullName: "Test One",
            password: bcrypt.hashSync('Abc123', 10),
            roles: ['admin']
        },
        {
            email: "test2@google.com",
            fullName: "Test Two",
            password: bcrypt.hashSync('Abc123', 10),
            roles: ['user', 'super']
        },
    ],

  products: [
    // --- PERFILES Y ESTRUCTURALES ---
    {
      description: "Perfil Estructural Cuadrado (PTR) de 1 1/2\" x 1 1/2\" en Calibre 14. Longitud estándar de 6 metros. Ideal para marcos de portones, estructuras ligeras y soportes de herrería en general.",
      images: ['ptr-112-cal14-01.jpg', 'ptr-112-cal14-02.jpg', 'ptr-112-cal14-03.jpg'],
      stock: 45,
      price: 480,
      specs: ['Calibre 14', '6 metros'],
      slug: "ptr_1_12_x_1_12_calibre_14_6m",
      type: ['ptr'],
      category: 'perfiles',
      tags: ['ptr', 'estructural', 'perfil', 'calibre 14'],
      title: "PTR 1 1/2\" x 1 1/2\" Calibre 14 (6m)"
    },
    {
      description: "Perfil Tubular Rectangular (PTR) 2\" x 1\" Calibre 14 de 6 metros. Comercializado ampliamente en México para elaboración de bastidores, rejas y protecciones residenciales.",
      images: ['ptr-2x1-cal14-01.jpg', 'ptr-2x1-cal14-02.jpg', 'ptr-2x1-cal14-03.jpg'],
      stock: 30,
      price: 430,
      specs: ['Calibre 14', '6 metros'],
      slug: "ptr_2_x_1_calibre_14_6m",
      type: ['ptr'],
      category: 'perfiles',
      tags: ['ptr', 'estructural', 'recto'],
      title: "PTR 2\" x 1\" Calibre 14 (6m)"
    },
    {
      description: "PTR Cuadrado de 2\" x 2\" Calibre 14. Tramo de 6 metros de largo. Excelente resistencia mecánica para pilares de tejados, remolques y herrería pesada.",
      images: ['ptr-2x2-cal14-01.jpg', 'ptr-2x2-cal14-02.jpg', 'ptr-2x2-cal14-03.jpg'],
      stock: 25,
      price: 650,
      specs: ['Calibre 14', '6 metros'],
      slug: "ptr_2_x_2_calibre_14_6m",
      type: ['ptr'],
      category: 'perfiles',
      tags: ['ptr', 'pesado', 'cuadrado'],
      title: "PTR 2\" x 2\" Calibre 14 (6m)"
    },
    {
      description: "PTR Ligero 1\" x 1\" Calibre 18 en tramo de 6 metros. Perfecto para trabajos decorativos, mueblería de estilo industrial y herrería ligera.",
      images: ['ptr-1x1-cal18-01.jpg', 'ptr-1x1-cal18-02.jpg', 'ptr-1x1-cal18-03.jpg'],
      stock: 60,
      price: 240,
      specs: ['Calibre 18', '6 metros'],
      slug: "ptr_1_x_1_calibre_18_6m",
      type: ['ptr'],
      category: 'perfiles',
      tags: ['ptr', 'muebles', 'ligero'],
      title: "PTR 1\" x 1\" Calibre 18 (6m)"
    },
    {
      description: "Ángulo de Acero Comercial de 1\" x 1/8\" con 6 metros de largo. Utilizado para marcos, refuerzos de esquinas y soportes universales.",
      images: ['angulo-1x18-01.jpg', 'angulo-1x18-02.jpg', 'angulo-1x18-03.jpg'],
      stock: 80,
      price: 210,
      specs: ['1/8" espesor', '6 metros'],
      slug: "angulo_de_acero_1_x_1_8_6m",
      type: ['angulo'],
      category: 'perfiles',
      tags: ['angulo', 'acero', 'marcos'],
      title: "Ángulo de Acero 1\" x 1/8\" (6m)"
    },
    {
      description: "Ángulo de Acero LAMINADO de 1 1/2\" x 3/16\" (6m). Gran durabilidad estructural para soporte de herrería y bases de maquinaria.",
      images: ['angulo-112x316-01.jpg', 'angulo-112x316-02.jpg', 'angulo-112x316-03.jpg'],
      stock: 40,
      price: 390,
      specs: ['3/16" espesor', '6 metros'],
      slug: "angulo_de_acero_1_12_x_3_16_6m",
      type: ['angulo'],
      category: 'perfiles',
      tags: ['angulo', 'pesado', 'estructural'],
      title: "Ángulo de Acero 1 1/2\" x 3/16\" (6m)"
    },
    {
      description: "Ángulo de Acero Pesado 2\" x 1/4\" en barra de 6 metros. Diseñado para soporte de altas cargas y trabes mecánicas.",
      images: ['angulo-2x14-01.jpg', 'angulo-2x14-02.jpg', 'angulo-2x14-03.jpg'],
      stock: 18,
      price: 680,
      specs: ['1/4" espesor', '6 metros'],
      slug: "angulo_de_acero_2_x_1_4_6m",
      type: ['angulo'],
      category: 'perfiles',
      tags: ['angulo', 'industrial', 'pesado'],
      title: "Ángulo de Acero 2\" x 1/4\" (6m)"
    },
    {
      description: "Solera Comercial de Acero de 1\" x 1/8\" (6 metros). Solución estándar para solapes, uniones, abrazaderas y forjado decorativo.",
      images: ['solera-1x18-01.jpg', 'solera-1x18-02.jpg', 'solera-1x18-03.jpg'],
      stock: 100,
      price: 160,
      specs: ['1/8" espesor', '6 metros'],
      slug: "solera_de_acero_1_x_1_8_6m",
      type: ['solera'],
      category: 'perfiles',
      tags: ['solera', 'plana', 'solapes'],
      title: "Solera de Acero 1\" x 1/8\" (6m)"
    },
    {
      description: "Solera de Acero Comercial de 1 1/2\" x 3/16\" de 6m. Espesor ideal para platabandas de portones y refuerzos estructurales horizontales.",
      images: ['solera-112x316-01.jpg', 'solera-112x316-02.jpg', 'solera-112x316-03.jpg'],
      stock: 50,
      price: 320,
      specs: ['3/16" espesor', '6 metros'],
      slug: "solera_de_acero_1_12_x_3_16_6m",
      type: ['solera'],
      category: 'perfiles',
      tags: ['solera', 'refuerzo'],
      title: "Solera de Acero 1 1/2\" x 3/16\" (6m)"
    },
    {
      description: "Solera de Acero de 2\" x 1/4\" en tramo de 6m. Solera de alto espesor para fabricación de bridas, anclajes y bases soleras.",
      images: ['solera-2x14-01.jpg', 'solera-2x14-02.jpg', 'solera-2x14-03.jpg'],
      stock: 30,
      price: 520,
      specs: ['1/4" espesor', '6 metros'],
      slug: "solera_de_acero_2_x_1_4_6m",
      type: ['solera'],
      category: 'perfiles',
      tags: ['solera', 'industrial'],
      title: "Solera de Acero 2\" x 1/4\" (6m)"
    },

    // --- TUBULARES DE VENTANA Y PUERTA ---
    {
      description: "Perfil Tubular Portavidrio P-100 en Calibre 18 (6m). Elemento fundamental en la carpintería metálica mexicana para marcos de ventanas fijas.",
      images: ['perfil-p100-01.jpg', 'perfil-p100-02.jpg', 'perfil-p100-03.jpg'],
      stock: 75,
      price: 195,
      specs: ['Calibre 18', '6 metros'],
      slug: "perfil_tubular_p_100_calibre_18_6m",
      type: ['perfil_ventana'],
      category: 'tubulares',
      tags: ['p100', 'ventana', 'tubular'],
      title: "Perfil Tubular P-100 Calibre 18 (6m)"
    },
    {
      description: "Perfil Tubular Escalón P-150 Calibre 18 de 6 metros. Utilizado habitualmente para mosquiteros y bastidores abatibles en ventanas.",
      images: ['perfil-p150-01.jpg', 'perfil-p150-02.jpg', 'perfil-p150-03.jpg'],
      stock: 65,
      price: 215,
      specs: ['Calibre 18', '6 metros'],
      slug: "perfil_tubular_p_150_calibre_18_6m",
      type: ['perfil_ventana'],
      category: 'tubulares',
      tags: ['p150', 'ventana', 'mosquitero'],
      title: "Perfil Tubular P-150 Calibre 18 (6m)"
    },
    {
      description: "Perfil Tubular Doble Escalón P-200 Calibre 18 (6m). Diseñado para hojas abribles de ventanas metálicas residenciales.",
      images: ['perfil-p200-01.jpg', 'perfil-p200-02.jpg', 'perfil-p200-03.jpg'],
      stock: 55,
      price: 235,
      specs: ['Calibre 18', '6 metros'],
      slug: "perfil_tubular_p_200_calibre_18_6m",
      type: ['perfil_ventana'],
      category: 'tubulares',
      tags: ['p200', 'ventana', 'hoja'],
      title: "Perfil Tubular P-200 Calibre 18 (6m)"
    },
    {
      description: "Perfil Tubular T-300 o Zoclo Calibre 18 (6m). Perfil de gran volumen para hojas principales de puertas metálicas modernas.",
      images: ['perfil-p300-01.jpg', 'perfil-p300-02.jpg', 'perfil-p300-03.jpg'],
      stock: 40,
      price: 285,
      specs: ['Calibre 18', '6 metros'],
      slug: "perfil_tubular_p_300_calibre_18_6m",
      type: ['perfil_ventana'],
      category: 'tubulares',
      tags: ['p300', 'puerta', 'zoclo'],
      title: "Perfil Tubular P-300 Calibre 18 (6m)"
    },
    {
      description: "Perfil Cerco C-100 Calibre 18 en tramo de 6m. Marco exterior Perimetral para puertas de tambor y cancelería de herrería.",
      images: ['perfil-c100-01.jpg', 'perfil-c100-02.jpg', 'perfil-c100-03.jpg'],
      stock: 50,
      price: 220,
      specs: ['Calibre 18', '6 metros'],
      slug: "perfil_tubular_c_100_calibre_18_6m",
      type: ['perfil_ventana'],
      category: 'tubulares',
      tags: ['c100', 'cerco', 'puerta'],
      title: "Perfil Tubular Cerco C-100 (6m)"
    },
    {
      description: "Perfil Pasamanos M-225 Calibre 18 (6m). Diseño anatómico semi-curvo ideal para coronar barandales y pasamanos de escaleras.",
      images: ['perfil-m225-01.jpg', 'perfil-m225-02.jpg', 'perfil-m225-03.jpg'],
      stock: 35,
      price: 260,
      specs: ['Calibre 18', '6 metros'],
      slug: "perfil_pasamanos_m_225_calibre_18_6m",
      type: ['perfil_ventana'],
      category: 'tubulares',
      tags: ['pasamanos', 'barandal', 'm225'],
      title: "Perfil Pasamanos M-225 Calibre 18 (6m)"
    },
    {
      description: "Varilla Cuadrada Sólida de 1/2\" (6 metros). Material clave en forja tradicional para barrotes de rejas, protecciones y portones artesanales.",
      images: ['varilla-cuadrada-12-01.jpg', 'varilla-cuadrada-12-02.jpg', 'varilla-cuadrada-12-03.jpg'],
      stock: 90,
      price: 215,
      specs: ['1/2" sólida', '6 metros'],
      slug: "varilla_cuadrada_solida_1_2_6m",
      type: ['varilla'],
      category: 'perfiles',
      tags: ['varilla', 'cuadrado', 'forja'],
      title: "Varilla Cuadrada Sólida 1/2\" (6m)"
    },
    {
      description: "Varilla Redonda Sólida de 3/8\" (6m). Ligera y moldeable para figuras de alambre, adornos de forja y protecciones de ventanas.",
      images: ['varilla-redonda-38-01.jpg', 'varilla-redonda-38-02.jpg', 'varilla-redonda-38-03.jpg'],
      stock: 110,
      price: 125,
      specs: ['3/8" sólida', '6 metros'],
      slug: "varilla_redonda_solida_3_8_6m",
      type: ['varilla'],
      category: 'perfiles',
      tags: ['redondo', 'varilla', 'proteccion'],
      title: "Varilla Redonda Sólida 3/8\" (6m)"
    },
    {
      description: "Tubo Industrial Redondo de 1 1/4\" Calibre 18 en 6m. Usado en la fabricación de protecciones, mobiliario escolar e industrial.",
      images: ['tubo-114-cal18-01.jpg', 'tubo-114-cal18-02.jpg', 'tubo-114-cal18-03.jpg'],
      stock: 45,
      price: 230,
      specs: ['Calibre 18', '6 metros'],
      slug: "tubo_industrial_redondo_1_1_4_calibre_18_6m",
      type: ['tubo'],
      category: 'tubulares',
      tags: ['tubo', 'redondo', 'industrial'],
      title: "Tubo Industrial Redondo 1 1/4\" Calibre 18 (6m)"
    },
    {
      description: "Tubo Cédula 30 de 1 1/2\" de 6 metros. Tubo de alta resistencia mecánica para pilares de mallas, estructuras y soportes.",
      images: ['tubo-cedula30-112-01.jpg', 'tubo-cedula30-112-02.jpg', 'tubo-cedula30-112-03.jpg'],
      stock: 30,
      price: 490,
      specs: ['Cédula 30', '6 metros'],
      slug: "tubo_cedula_30_1_1_2_6m",
      type: ['tubo'],
      category: 'tubulares',
      tags: ['cedula 30', 'tubo', 'resistencia'],
      title: "Tubo Cédula 30 de 1 1/2\" (6m)"
    },

    // --- LÁMINAS Y PLACAS ---
    {
      description: "Lámina Negra Rolada en Frío (Rolled Cold) Calibre 18 en hoja de 3 x 10 pies (0.91 x 3.05 m). Superficie lisa ideal para portones de hoja completa.",
      images: ['lamina-frio-cal18-01.jpg', 'lamina-frio-cal18-02.jpg', 'lamina-frio-cal18-03.jpg'],
      stock: 25,
      price: 850,
      specs: ['Calibre 18', '3 x 10 pies'],
      slug: "lamina_negra_rolada_frio_calibre_18_3x10",
      type: ['lamina'],
      category: 'laminas',
      tags: ['lamina', 'negra', 'calibre 18'],
      title: "Lámina Negra Rolada en Frío Cal. 18 (3x10ft)"
    },
    {
      description: "Lámina Negra Rolada en Caliente Calibre 14 en hoja de 4 x 8 pies (1.22 x 2.44 m). Espesor robusto para fondos de contención y remolques.",
      images: ['lamina-caliente-cal14-01.jpg', 'lamina-caliente-cal14-02.jpg', 'lamina-caliente-cal14-03.jpg'],
      stock: 20,
      price: 1150,
      specs: ['Calibre 14', '4 x 8 pies'],
      slug: "lamina_negra_rolada_caliente_calibre_14_4x8",
      type: ['lamina'],
      category: 'laminas',
      tags: ['lamina', 'caliente', 'calibre 14'],
      title: "Lámina Negra Caliente Cal. 14 (4x8ft)"
    },
    {
      description: "Lámina Galvanizada Zintro Calibre 20 de 3 x 8 pies. Excelente resistencia a la intemperie y corrosión ambiental.",
      images: ['lamina-galvanizada-cal20-01.jpg', 'lamina-galvanizada-cal20-02.jpg', 'lamina-galvanizada-cal20-03.jpg'],
      stock: 35,
      price: 620,
      specs: ['Calibre 20', '3 x 8 pies'],
      slug: "lamina_galvanizada_calibre_20_3x8",
      type: ['lamina'],
      category: 'laminas',
      tags: ['galvanizado', 'zintro', 'anticorrosivo'],
      title: "Lámina Galvanizada Calibre 20 (3x8ft)"
    },
    {
      description: "Lámina Antiderrapante (Tipo Diamante) en 1/8\" de espesor, formato 4 x 8 pies. Para escalones, rampas vehiculares y pisos industriales.",
      images: ['lamina-antiderrapante-18-01.jpg', 'lamina-antiderrapante-18-02.jpg', 'lamina-antiderrapante-18-03.jpg'],
      stock: 12,
      price: 2450,
      specs: ['1/8" espesor', '4 x 8 pies'],
      slug: "lamina_antiderrapante_1_8_4x8",
      type: ['lamina'],
      category: 'laminas',
      tags: ['antiderrapante', 'diamante', 'piso'],
      title: "Lámina Antiderrapante 1/8\" (4x8ft)"
    },
    {
      description: "Placa de Acero Comercial A36 en 1/4\" de espesor (4 x 8 pies). Corte para cartelas de refuerzo, anclajes de estructura y cimentación.",
      images: ['placa-acero-14-01.jpg', 'placa-acero-14-02.jpg', 'placa-acero-14-03.jpg'],
      stock: 10,
      price: 3800,
      specs: ['1/4" espesor', '4 x 8 pies'],
      slug: "placa_de_acero_a36_1_4_4x8",
      type: ['placa'],
      category: 'laminas',
      tags: ['placa', 'a36', 'industrial'],
      title: "Placa de Acero A36 1/4\" (4x8ft)"
    },

    // --- CONSUMIBLES DE SOLDADURA Y ABRASIVOS ---
    {
      description: "Electrodo Revestido E6013 de 1/8\" marca Infra (Caja de 5 kg). Arcweld para soldadura de punto, calibres delgados y herrería en general.",
      images: ['electrodo-e6013-18-01.jpg', 'electrodo-e6013-18-02.jpg', 'electrodo-e6013-18-03.jpg'],
      stock: 50,
      price: 380,
      specs: ['1/8"', 'Caja 5 kg'],
      slug: "electrodo_revestido_e6013_1_8_caja_5kg",
      type: ['electrodo'],
      category: 'consumibles',
      tags: ['electrodo', 'e6013', 'infra', 'soldar'],
      title: "Electrodo Revestido E6013 1/8\" (Caja 5kg)"
    },
    {
      description: "Electrodo de Alto Rendimiento E7018 de 1/8\" (Caja de 5 kg). Bajo hidrógeno para soldaduras estructurales de alta resistencia y esfuerzo.",
      images: ['electrodo-e7018-18-01.jpg', 'electrodo-e7018-18-02.jpg', 'electrodo-e7018-18-03.jpg'],
      stock: 30,
      price: 460,
      specs: ['1/8"', 'Caja 5 kg'],
      slug: "electrodo_revestido_e7018_1_8_caja_5kg",
      type: ['electrodo'],
      category: 'consumibles',
      tags: ['electrodo', 'e7018', 'estructural'],
      title: "Electrodo Revestido E7018 1/8\" (Caja 5kg)"
    },
    {
      description: "Electrodo E6010 de 1/8\" para Pases de Raíz (Caja de 5 kg). Gran penetración en aceros sucios o fuertemente oxidados.",
      images: ['electrodo-e6010-18-01.jpg', 'electrodo-e6010-18-02.jpg', 'electrodo-e6010-18-03.jpg'],
      stock: 20,
      price: 490,
      specs: ['1/8"', 'Caja 5 kg'],
      slug: "electrodo_revestido_e6010_1_8_caja_5kg",
      type: ['electrodo'],
      category: 'consumibles',
      tags: ['electrodo', 'e6010', 'penetrante'],
      title: "Electrodo Revestido E6010 1/8\" (Caja 5kg)"
    },
    {
      description: "Rollo de Microalambre ER70S-6 de 0.035\" (15 kg) para proceso MIG/MAG. Excelente acabado sin escoria excesiva.",
      images: ['microalambre-035-15kg-01.jpg', 'microalambre-035-15kg-02.jpg','microalambre-035-15kg-03.jpg'],
      stock: 15,
      price: 1250,
      specs: ['0.035"', 'Rollo 15 kg'],
      slug: "rollo_microalambre_er70s6_035_15kg",
      type: ['electrodo'],
      category: 'consumibles',
      tags: ['microalambre', 'mig', 'er70s6'],
      title: "Rollo Microalambre ER70S-6 0.035\" (15kg)"
    },
    {
      description: "Disco de Corte Extra Fino para Metal y Acero Inoxidable 4 1/2\" x 3/64\" x 7/8\". Corte rápido y limpio con mínimo desperdicio de material.",
      images: ['disco-corte-412-01.jpg', 'disco-corte-412-02.jpg', 'disco-corte-412-03.jpg'],
      stock: 200,
      price: 28,
      specs: ['4 1/2"', '3/64" grosor'],
      slug: "disco_de_corte_metal_4_1_2_x_3_64",
      type: ['disco'],
      category: 'consumibles',
      tags: ['disco', 'corte', 'esmeril'],
      title: "Disco de Corte Fino Metal 4 1/2\" x 3/64\""
    },
    {
      description: "Disco de Corte para Metal 7\" x 1/16\" x 7/8\". Para esmeriladora grande de 7 pulgadas en perfiles de calibre mediano a grueso.",
      images: ['disco-corte-7-01.jpg', 'disco-corte-7-02.jpg', 'disco-corte-7-03.jpg'],
      stock: 80,
      price: 55,
      specs: ['7"', '1/16" grosor'],
      slug: "disco_de_corte_metal_7_x_1_16",
      type: ['disco'],
      category: 'consumibles',
      tags: ['disco', '7pulgadas', 'corte'],
      title: "Disco de Corte Metal 7\" x 1/16\""
    },
    {
      description: "Disco para Desbaste de Soldadura 4 1/2\" x 1/4\". Remueve cordones de soldadura y rebabas de corte rápidamente.",
      images: ['disco-desbaste-412-01.jpg', 'disco-desbaste-412-02.jpg', 'disco-desbaste-412-03.jpg'],
      stock: 120,
      price: 38,
      specs: ['4 1/2"', '1/4" grosor'],
      slug: "disco_desbaste_soldadura_4_1_2_x_1_4",
      type: ['disco'],
      category: 'consumibles',
      tags: ['disco', 'desbaste', 'soldadura'],
      title: "Disco Desbaste Soldadura 4 1/2\" x 1/4\""
    },
    {
      description: "Disco de Lija Flap de Zirconio 4 1/2\" Grano 60. Ideal para pulir cordones de soldadura y dar acabado previo a la pintura.",
      images: ['disco-flap-g60-01.jpg', 'disco-flap-g60-02.jpg'],
      stock: 150,
      price: 48,
      specs: ['4 1/2"', 'Grano 60'],
      slug: "disco_flap_zirconio_4_1_2_grano_60",
      type: ['disco'],
      category: 'consumibles',
      tags: ['flap', 'pulido', 'zirconio'],
      title: "Disco Flap Zirconio 4 1/2\" Grano 60"
    },
    {
      description: "Disco Abrasivo para Cortadora Tronzadora de 14\" x 7/64\" x 1\". Apto para trozar barras sólidas, PTRs y tubos de acero.",
      images: ['disco-tronzadora-14-01.jpg', 'disco-tronzadora-14-02.jpg', 'disco-tronzadora-14-03.jpg'],
      stock: 40,
      price: 135,
      specs: ['14"', 'Centro 1"'],
      slug: "disco_tronzadora_corte_metal_14",
      type: ['disco'],
      category: 'consumibles',
      tags: ['tronzadora', '14pulgadas', 'corte'],
      title: "Disco Abrasivo Tronzadora 14\""
    },

    // --- HERRAJES Y ELEMENTOS PARA PORTONES ---
    {
      description: "Bisagra Tubular Salomónica / De Libro de 3\" x 3\". Para puertas pesadas de protecciones y zaguanes (Par).",
      images: ['bisagra-tubular-3in-01.jpg', 'bisagra-tubular-3in-02.jpg'],
      stock: 100,
      price: 65,
      specs: ['3 pulgadas', 'Par'],
      slug: "bisagra_tubular_de_libro_3_pulgadas_par",
      type: ['bisagra'],
      category: 'herrajes',
      tags: ['bisagra', 'libro', 'puerta'],
      title: "Bisagra Tubular de Libro 3\" (Par)"
    },
    {
      description: "Bisagra de Tejo / Tejuelo de 2\" con Balín de Acero. Diseñada para soportar el peso de portones abatibles de gran escala.",
      images: ['tejuelo-2in-01.jpg', 'tejuelo-2in-02.jpg', 'tejuelo-2in-03.jpg'],
      stock: 60,
      price: 110,
      specs: ['2 pulgadas', 'Con balín'],
      slug: "bisagra_tejuelo_con_balin_2_pulgadas",
      type: ['bisagra'],
      category: 'herrajes',
      tags: ['tejuelo', 'balin', 'porton'],
      title: "Tejuelo con Balín para Portón 2\""
    },
    {
      description: "Carretilla de 2 Ruedas con Rodamiento para Portón Corredizo. Canal de guía tipo canaleta para desplazamiento suave.",
      images: ['carretilla-2ruedas-01.jpg', 'carretilla-2ruedas-02.jpg', 'carretilla-2ruedas-03.jpg'],
      stock: 45,
      price: 140,
      specs: ['2 ruedas', 'Balero sellado'],
      slug: "carretilla_porton_corredizo_2_ruedas",
      type: ['bisagra'],
      category: 'herrajes',
      tags: ['carretilla', 'corredizo', 'porton'],
      title: "Carretilla para Portón Corredizo 2 Ruedas"
    },
    {
      description: "Pasador de Barra Reforzado con Portapadlock de 3/8\" x 8\". Cierre de seguridad para soldar directamente en puertas metálicas.",
      images: ['pasador-barra-8in-01.jpg', 'pasador-barra-8in-02.jpg', 'pasador-barra-8in-03.jpg'],
      stock: 80,
      price: 85,
      specs: ['8 pulgadas', 'Para soldar'],
      slug: "pasador_barra_3_8_x_8_portapadlock",
      type: ['bisagra'],
      category: 'herrajes',
      tags: ['pasador', 'cerrojo', 'candado'],
      title: "Pasador de Barra de 3/8\" con Portacandado"
    },
    {
      description: "Tejo Superior e Inferior para Portón Giratorio. Permite la articulación pivotante de portones metálicos residenciales.",
      images: ['kit-tejos-pivotante-01.jpg', 'kit-tejos-pivotante-02.jpg', 'kit-tejos-pivotante-03.jpg'],
      stock: 35,
      price: 180,
      specs: ['Kit par', 'Alta carga'],
      slug: "kit_tejos_pivotantes_para_porton",
      type: ['bisagra'],
      category: 'herrajes',
      tags: ['tejo', 'pivotante', 'porton'],
      title: "Kit de Tejos Pivotantes para Portón"
    },

    // --- CERRAJERÍA PARA HERRERÍA ---
    {
      description: "Cerradura de Sobreponer para Herrería Phillips 715 Clásica. Gatillo de seguridad y cilindro de latón con 3 llaves.",
      images: ['cerradura-phillips-715-01.jpg', 'cerradura-phillips-715-02.jpg', 'cerradura-phillips-715-03.jpg'],
      stock: 40,
      price: 450,
      specs: ['Sobreponer', 'Izquierda/Derecha'],
      slug: "cerradura_sobreponer_herreria_phillips_715",
      type: ['cerradura'],
      category: 'cerrajeria',
      tags: ['cerradura', 'phillips', '715', 'sobreponer'],
      title: "Cerradura de Sobreponer Phillips 715"
    },
    {
      description: "Cerradura de Barra Fija Phillips 800 de Alta Seguridad. Cerrojo de barra de acero sólido accionable con llave por ambos lados.",
      images: ['cerradura-phillips-800-01.jpg', 'cerradura-phillips-800-02.jpg', 'cerradura-phillips-800-03.jpg'],
      stock: 25,
      price: 580,
      specs: ['Barra fija', 'Doble cilindro'],
      slug: "cerradura_de_barra_fija_phillips_800",
      type: ['cerradura'],
      category: 'cerrajeria',
      tags: ['barra', 'phillips', '800', 'seguridad'],
      title: "Cerradura de Barra Fija Phillips 800"
    },
    {
      description: "Cerradura para Incrustar / Embutir en Perfil P-300 o C-100. Manija tipo maneta compacta para puertas modernas de aluminio o acero.",
      images: ['chapa-embutir-perfil-01.jpg', 'chapa-embutir-perfil-02.jpg', 'chapa-embutir-perfil-03.jpg'],
      stock: 30,
      price: 390,
      specs: ['Angosta', 'Para perfil tubular'],
      slug: "cerradura_embutir_para_perfil_tubular",
      type: ['cerradura'],
      category: 'cerrajeria',
      tags: ['chapa', 'embutir', 'perfil'],
      title: "Cerradura de Embutir para Perfil Tubular"
    },
    {
      description: "Chapa de Manija Residencial para Portón con Pasador Nocturno. Acabado cromo mate para integración estética.",
      images: ['chapa-manija-residencia-01.jpg', 'chapa-manija-residencia-02.jpg', 'chapa-manija-residencia-03.jpg'],
      stock: 20,
      price: 720,
      specs: ['Manija doble', 'Cilindro llave-llave'],
      slug: "cerradura_manija_residencial_para_porton",
      type: ['cerradura'],
      category: 'cerrajeria',
      tags: ['manija', 'chapa', 'residencial'],
      title: "Cerradura de Manija Residencial"
    },

    // --- QUÍMICOS, PINTURAS Y ACABADOS ---
    {
      description: "Primer Anticorrosivo Gris Alquidálico (Cubeta 19 Litros). Protege el hierro recién trabajado contra la oxidación antes del esmalte final.",
      images: ['primer-gris-19l-01.jpg', 'primer-gris-19l-02.jpg'],
      stock: 15,
      price: 1850,
      specs: ['19 Litros', 'Gris mate'],
      slug: "primer_anticorrosivo_gris_alquidalico_19l",
      type: ['quimico'],
      category: 'herramientas',
      tags: ['primer', 'anticorrosivo', 'pintura', '19l'],
      title: "Primer Anticorrosivo Gris Alquidálico (19L)"
    },
    {
      description: "Esmalte Secado Rápido Negro Mate (Bote 1 Litro). Acabado decorativo de alta dureza para rejas, protecciones y muebles industriales.",
      images: ['esmalte-negro-1l-01.jpg', 'esmalte-negro-1l-02.jpg'],
      stock: 50,
      price: 195,
      specs: ['1 Litro', 'Negro Mate'],
      slug: "esmalte_secado_rapido_negro_mate_1l",
      type: ['quimico'],
      category: 'herramientas',
      tags: ['esmalte', 'negro', 'secado rapido'],
      title: "Esmalte Secado Rápido Negro Mate (1L)"
    },
    {
      description: "Thinner Estándar para Limpieza de Metal y Dilución de Pintura (Garrafa 19 Litros). Remueve grasas de fábrica en perfiles.",
      images: ['thinner-estandar-19l-01.jpg', 'thinner-estandar-19l-02.jpg', 'thinner-estandar-19l-03.jpg'],
      stock: 20,
      price: 780,
      specs: ['19 Litros', 'Estándar'],
      slug: "solventes_thinner_estandar_19l",
      type: ['quimico'],
      category: 'herramientas',
      tags: ['thinner', 'solvente', 'limpieza'],
      title: "Thinner Estándar Limpieza (20L)"
    },
    {
      description: "Disolvente Desengrasante Fosfatizante para Preparación de Superficies (4 Litros). Limpia y acondiciona el acero para máxima adherencia de la pintura.",
      images: ['desengrasante-fosfatizante-4l-01.jpg', 'desengrasante-fosfatizante-4l-02.jpg', 'desengrasante-fosfatizante-4l-03.jpg'],
      stock: 25,
      price: 340,
      specs: ['4 Litros', 'Acondicionador'],
      slug: "desengrasante_fosfatizante_para_acero_4l",
      type: ['quimico'],
      category: 'herramientas',
      tags: ['desengrasante', 'fosfatizante', 'preparacion'],
      title: "Desengrasante Fosfatizante para Acero (4L)"
    },

    // --- MAQUINARIA Y HERRAMIENTAS ---
    {
      description: "Inversora para Soldar 200A Bi-Voltaje (110V/220V). Pantalla digital, tecnología IGBT súper portátil para soldar electrodo 6013 y 7018 continuamente.",
      images: ['inversora-200a-01.jpg', 'inversora-200a-02.jpg', 'inversora-200a-03.jpg'],
      stock: 12,
      price: 3450,
      specs: ['200 Amperios', '110V/220V Bi-voltaje'],
      slug: "soldadora_inversora_200a_bivoltaje",
      type: ['maquinaria'],
      category: 'herramientas',
      tags: ['inversora', 'soldadora', '200a', 'igbt'],
      title: "Soldadora Inversora 200A Bi-Voltaje"
    },
    {
      description: "Cortadora de Disco Abrasivo / Tronzadora 14\" de 2200W. Motor potente con prensa de ajuste rápido para cortes en ángulo de 0° a 45°.",
      images: ['tronzadora-14in-01.jpg', 'tronzadora-14in-02.jpg', 'tronzadora-14in-03.jpg'],
      stock: 8,
      price: 3890,
      specs: ['14 pulgadas', '2200W'],
      slug: "cortadora_tronzadora_de_disco_14_2200w",
      type: ['maquinaria'],
      category: 'herramientas',
      tags: ['tronzadora', 'cortadora', '14pulgadas'],
      title: "Cortadora Tronzadora de Disco 14\" 2200W"
    },
    {
      description: "Esmeriladora Angular de 4 1/2\" 850W con Mango Lateral de 3 Posiciones. La herramienta indispensable para corte y desbaste en taller.",
      images: ['esmeriladora-412-850w-01.jpg', 'esmeriladora-412-850w-02.jpg', 'esmeriladora-412-850w-03.jpg'],
      stock: 25,
      price: 1150,
      specs: ['4 1/2 pulgadas', '850 Watts'],
      slug: "esmeriladora_angular_4_1_2_850w",
      type: ['maquinaria'],
      category: 'herramientas',
      tags: ['esmeriladora', 'pulidora', 'esmeril'],
      title: "Esmeriladora Angular 4 1/2\" 850W"
    },
    {
      description: "Careta Electrónica Fotosensible Ajustable Sombras 9 a 13. Tiempo de respuesta ultra rápido (1/25,000s) para protección ocular.",
      images: ['careta-electronica-01.jpg', 'careta-electronica-02.jpg', 'careta-electronica-03.jpg'],
      stock: 30,
      price: 680,
      specs: ['Sombra 9-13', 'Celda solar + Batería'],
      slug: "careta_electronica_fotosensible_para_soldar",
      type: ['maquinaria'],
      category: 'herramientas',
      tags: ['careta', 'fotosensible', 'seguridad'],
      title: "Careta Electrónica Fotosensible para Soldar"
    },
    {
      description: "Esmeril de Banco de 6\" 3/4 HP con 2 Piedras de Grano Mediano y Fino. Para afilado de brocas, cinceles y retoque de piezas.",
      images: ['esmeril-banco-6in-01.jpg', 'esmeril-banco-6in-02.jpg', 'esmeril-banco-6in-03.jpg'],
      stock: 10,
      price: 1650,
      specs: ['6 pulgadas', '3/4 HP'],
      slug: "esmeril_de_banco_6_pulgadas_3_4_hp",
      type: ['maquinaria'],
      category: 'herramientas',
      tags: ['esmeril', 'banco', 'afilar'],
      title: "Esmeril de Banco 6\" 3/4 HP"
    },
    {
      description: "Prensa de Prensa de Forja / Prensa C de 6\" Heavy Duty. Cuerpo de hierro maleable con husillo de rosca reforzada.",
      images: ['prensa-c-6in-01.jpg', 'prensa-c-6in-02.jpg', 'prensa-c-6in-03.jpg'],
      stock: 40,
      price: 240,
      specs: ['6 pulgadas', 'Hierro maleable'],
      slug: "prensa_tipo_c_6_pulgadas_reforzada",
      type: ['maquinaria'],
      category: 'herramientas',
      tags: ['prensa', 'prensa c', 'sujecion'],
      title: "Prensa Tipo C de 6\" Reforzada"
    },
    {
      description: "Escuadra Magnética para Soldar de 4\" (Capacidad 50 lbs / 22 kg). Mantiene piezas a 45°, 90° y 135° permitiendo punteado preciso.",
      images: ['escuadra-magnetica-4in-01.jpg', 'escuadra-magnetica-4in-02.jpg', 'escuadra-magnetica-4in-03.jpg'],
      stock: 70,
      price: 160,
      specs: ['4 pulgadas', 'Sostiene 22 kg'],
      slug: "escuadra_magnetica_para_soldar_4_50lbs",
      type: ['maquinaria'],
      category: 'herramientas',
      tags: ['escuadra', 'iman', 'magnetica'],
      title: "Escuadra Magnética para Soldar 4\" (50 lbs)"
    },
    {
      description: "Cepillo de Alambre de Acero con Mango de Madera (6 x 19 Hileras). Esencial para remover escoria de soldadura.",
      images: ['cepillo-alambre-01.jpg', 'cepillo-alambre-02.jpg', 'cepillo-alambre-03.jpg'],
      stock: 120,
      price: 45,
      specs: ['Cerdas acero', 'Mango madera'],
      slug: "cepillo_de_alambre_acero_con_mango",
      type: ['maquinaria'],
      category: 'herramientas',
      tags: ['cepillo', 'alambre', 'limpieza'],
      title: "Cepillo de Alambre de Acero"
    },
    {
      description: "Martillo Piqueta / Piqueta para Escoria con Mango Muelle Antivibración. Para retirar la escoria tras soldar con electrodo revestido.",
      images: ['piqueta-escoria-01.jpg', 'piqueta-escoria-02.jpg', 'piqueta-escoria-03.jpg', 'piqueta-escoria-04.jpg'],
      stock: 50,
      price: 120,
      specs: ['Mango resorte', 'Acero forjado'],
      slug: "martillo_piqueta_para_escoria_de_soldadura",
      type: ['maquinaria'],
      category: 'herramientas',
      tags: ['piqueta', 'martillo', 'escoria'],
      title: "Martillo Piqueta para Escoria"
    },
    {
      description: "Guantes de Carnaza Largos de 14\" para Soldador. Protección térmica alta contra chispas y calor radiante.",
      images: ['guantes-carnaza-14in-01.jpg', 'guantes-carnaza-14in-02.jpg', 'guantes-carnaza-14in-03.jpg'],
      stock: 90,
      price: 130,
      specs: ['14 pulgadas', 'Carnaza azul/roja'],
      slug: "guantes_de_carnaza_largos_14_para_soldador",
      type: ['maquinaria'],
      category: 'herramientas',
      tags: ['guantes', 'carnaza', 'proteccion'],
      title: "Guantes de Carnaza Largos 14\" para Soldador"
    },
    {
      description: "Antorcha TIG WIG WP-26 con Válvula de Aire (4 Metros). Conector universal de media vuelta DINSE para adaptar a inversoras.",
      images: ['antorcha-tig-wp26-01.jpg', 'antorcha-tig-wp26-02.jpg', 'antorcha-tig-wp26-03.jpg'],
      stock: 15,
      price: 950,
      specs: ['4 metros', 'WP-26 Válvula'],
      slug: "antorcha_tig_wp_26_4_metros_con_valvula",
      type: ['maquinaria'],
      category: 'herramientas',
      tags: ['antorcha', 'tig', 'wp26'],
      title: "Antorcha TIG WP-26 con Válvula (4m)"
    }
  ]
};