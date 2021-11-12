import avatar1 from '../assets/avatar-medico-1.png';
import avatar2 from '../assets/avatar-medico-2.png';
import avatar3 from '../assets/avatar-medico-3.png';
import avatar4 from '../assets/avatar-medico-4.png';
import avatar5 from '../assets/avatar-medico-5.png';
import avatar6 from '../assets/avatar-medico-6.png';
import avatar7 from '../assets/avatar-cirurgiao-1.png';
import avatar8 from '../assets/avatar-cirurgiao-2.png';
import avatar9 from '../assets/avatar-enfermeira-1.png';
import avatar10 from '../assets/avatar-enfermeira-2.png';
import avatar11 from '../assets/avatar-enfermeira-3.png';
import avatar12 from '../assets/avatar-equipe-1.png';
import avatar13 from '../assets/avatar-equipe-2.png';
import avatar14 from '../assets/avatar-hazmat-1.png';
import avatar15 from '../assets/avatar-hazmat-2.png';
import avatar16 from '../assets/avatar-paramedico-1.png';

export const doctors = [
    {
        name: 'Dr. Adolpho Baamonde',
        speciality: 'Cirurgião Geral',
        contact: '(21) 3034-3397',
        addres: 'Ladeira do Ascurra 274',
        city: 'Rio de Janeiro',
        crm: '907456',
        about: 'adultos',
        pay: 'Dinheiro, Cartão de Débito, Cartão de Crédito, Cheque',
        formation: 'Medicina, Universidade Gama Filho, Piedade - Rio de Janeiro - RJ, 2005 a 2010.',
        opinion: 'Dr. Adolpho cuidou da minha mãe em um momento muito difícil. Estávamos desesperados e ele nos passou tanta segurança que nem sentimos todo processo de quimioterapia passar. - Rodrigo Pereira',
        rating: 5,
        photo: avatar1
        
    },
    {
        name: 'Dr. Roberto Medeiros',
        speciality: 'Urologista',
        contact: '(21) 2252-3152',
        addres: 'Rua Uruguaiana, 10 sala 2010 - Centro',
        city: 'Rio de Janeiro',
        crm: '894451',
        about: 'adultos',
        pay: 'Dinheiro, Cartão de Débito, Cartão de Crédito, Cheque',
        formation: 'Medicina, Universidade Federal do Estado do Rio de Janeiro - UNIRIO, 2010',
        opinion: 'Bom atendimento. Explicativo. Voltarei para dar continuidade ao atendimento inicial. Consultório organizado - Orlando Bastos',
        rating: 5,
        photo: avatar2
    },
    {
        name: 'Dr. Edvaldo Cavalcante',
        speciality: 'Ginecologista',
        contact: '(11) 99172-3500',
        addres: 'Av. Chucri Zaidan, 902',
        city: 'São Paulo',
        crm: '73212',
        about: 'adultos',
        pay: 'Dinheiro, Cartão de Débito, Transferência Bancária',
        formation: 'Graduação - Universidade de Santo Amaro - UNISA (1991) - São Paulo',
        opinion: 'Dr Edvaldo é muito atencioso, faz um apanhado geral de sua saúde. Explica se maneira fácil. Um verdadeiro ser humano, empático - Marcia Bertoli',
        rating: 5,
        photo: avatar3
    },
    {
        name: 'Dra. Amanda Fernandes',
        speciality: 'Psicólogo',
        contact: '(21) 99303-8780',
        addres: 'Rua Miguel de Frias, 150',
        city: 'Rio de Janeiro',
        crm: '54926',
        about: 'adultos, crianças a partir dos 12 anos de idade',
        pay: 'Dinheiro, Cartão de Crédito, Transferência Bancária, Cartão de Débito',
        formation: 'Faculdades Integradas Maria Thereza',
        opinion: 'Ótima profissional, atenciosa, me ajuda muito com ansiedade e questões pessoais tbm. Muito satisfeita com o trabalho dela - Thamires',
        rating: 5,
        photo: avatar4
    },
    {
        name: 'Dra. Raisa Muniz',
        speciality: 'Endocrinologista',
        contact: '(11) 97877-7769',
        addres: 'R. Joaquim Floriano, 466',
        city: 'São Paulo',
        crm: '170050',
        about: 'adultos',
        pay: 'Dinheiro, Cartão de Crédito, Transferência Bancária, Cartão de Débito',
        formation: 'Pós Graduação em Endocrinologia e Metabologia, 2021, Medicina - Universidade de medicina de atajubá, 2014',
        opinion: 'Muito profissional explica muito bem e empenhada em resolver a tarefa que lhe foi atribuída, primeira vez passando com a profissional estou gostando! - Jeferson Firmino Ferreira',
        rating: 5,
        photo: avatar5
    },
    {
        name: 'Dra. Marta Carrijo Vilela dos Santos',
        speciality: 'Ginecologista',
        contact: '(31) 97579-8785',
        addres: 'Avenida Brasil 1831 sala 407',
        city: 'Belo Horizonte',
        crm: '21472',
        about: 'adultos',
        pay: 'Dinheiro, Transferência Bancária, Cheque',
        formation: 'Faculdade de Ciências Médicas de Minas Gerais - 1987',
        opinion: 'Excelente profissional , atenciosa, segura, disponível, experiente, empática , domina o corpo e mente - Maria das Graças',
        rating: 5,
        photo: avatar6
    },
    {
        name: 'Dr. Pedro Paulo Bastos Filho',
        speciality: 'Ginecologista',
        contact: '(71) 3247-5522',
        addres: 'Avenida Anita Garibaldi 1555, sala-805',
        city: 'Salvador',
        crm: '7781',
        about: 'adultos, crianças de qualquer idade',
        pay: 'Dinheiro',
        formation: 'Especialização em gravidez de alto risco - USP. 1987, Endocrinologia ginecológica',
        opinion: 'Me acompanha há anos e sempre muito atencioso. Profissional muito competente e humano. Especialista em gestação de risco. - Karina',
        rating: 5,
        photo: avatar7
    },
    {
        name: 'Deborah Mantovani Machado',
        speciality: 'Psicólogo',
        contact: '(31) 3335-4581',
        addres: 'Rua Fernandes Tourinho 999 (sala 610)',
        city: 'Belo Horizonte',
        crm: '6362',
        about: 'adultos, crianças de qualquer idade',
        pay: 'Cartão de Débito, Cartão de Crédito, Dinheiro, Transferência Bancária',
        formation: 'Psicologia, Universidade Federal do Rio de Janeiro, 1986',
        opinion: 'Déborah é uma profissional com raras qualidades: respeito ao cliente, competência e muito profissionalismo. Graças às sessões de psicoterapia hoje sou outra pessoa. Obrigada, Deborah, por fazer tanta diferença em minha vida! - Anônimo',
        rating: 5,
        photo: avatar8
    },
    {
        name: 'Dr. Márcio Xenofonte Siebra',
        speciality: 'Endocrinologista',
        contact: '(71) 3271-5217',
        addres: 'Av. Tancredo Neves, 620',
        city: 'Salvador',
        crm: '19042',
        about: 'adultos',
        pay: 'Cartão de Débito, Cartão de Crédito, Cheque, Dinheiro, Transferência Bancária',
        formation: 'Graduação em Medicina, UFC, 2004',
        opinion: 'Excelente experiência. Instalações imprecáveis, atendimento muito bom. O medico é muito eficiente e competente , atende com atenção explica tudo detalhadamente - Rogerio',
        rating: 5,
        photo: avatar9
    },
    {
        name: 'Dr. André Milanezi Lorenzini ',
        speciality: 'Urologista',
        contact: '(31) 3316-9291',
        addres: 'Rio Grande do norte, 23, 10° Andar',
        city: 'Belo Horizonte',
        crm: '37233',
        about: 'adultos',
        pay: 'Cartão de Débito, Cartão de Crédito, Depósito Bancário, Transferência Bancária',
        formation: 'Especialista em Cirurgia Geral, Universidade Federal do Espírito Santo, 2002',
        opinion: 'Muito atencioso e bem instruído, recomendo.. me passou até o número do WhatsApp caso ocorra algo diferente, novamente.. - Pedro Henrique',
        rating: 5,
        photo: avatar10
    },
    {
        name: 'Dr. Hugo Negreiros',
        speciality: 'Cirurgião Geral',
        contact: '(92) 98549-0364',
        addres: 'Avenida Djalma Batista 1719',
        city: 'Manaus',
        crm: '8593',
        about: 'adultos, crianças de qualquer idade',
        pay: 'Cartão de Débito, Cartão de Crédito, Dinheiro, Transferência Bancária',
        formation: 'Graduação em medicina - Universidade Do Estado Do Amazonas - UEA (2014)',
        opinion: 'Excelente profissional. A classe médica precisa de profissionais com atendimento de qualidade com simpatia, empatia, competência e atenção que o Dr. Hugo presta ao paciente. Foi atencioso, esclareceu as dúvidas sobre o exame, sobre a biopsia e possíveis tratamentos. Tudo na tranquilidade (sem pressa),segurança e competência. Gratidão a consulta de hoje. - Christiane Garrett',
        rating: 5,
        photo: avatar11
    },
    {
        name: 'Dr. Marcelo Falcão C. Vidal',
        speciality: 'Cirurgião Geral',
        contact: '(85) 99430-0244',
        addres: 'Av. Santos Dumont, 5753 (18º andar - Torre saúde, complexo São Mateus)',
        city: 'Fortaleza',
        crm: '12663',
        about: 'adultos',
        pay: 'Cartão de Crédito, Dinheiro, Transferência Bancária',
        formation: 'Medicina, Universidade Federal do Ceará, 2010',
        opinion: 'Atencioso, competente, acessível, seguro no que faz, esclarecedor, empático e deixa o paciente bem tranquilo. Show, superindico. - Marieta',
        rating: 5,
        photo: avatar12
    },
    {
        name: 'Dra. Raquel Rocha de Almeida Dantas ',
        speciality: 'Oftalmologista',
        contact: '(31) 3514-9647',
        addres: 'Avenida do Contorno, 4747, Ed. Lifecenter, 12° Andar',
        city: 'Belo Horizonte',
        crm: '15833',
        about: 'adultos, crianças a partir dos 12 anos de idade',
        pay: 'Dinheiro, Cartão de Débito, Cartão de Crédito, Cheque',
        formation: 'Graduada em Medicina pela Universidade Federal de Campina Grande - UFCG (1977-1982), Doutorado em Oftalmologia pela UFMG - Universidade Federal de Minas Gerais (1994-1999)',
        opinion: 'Vou ainda fazer tratamento. Ela me pareceu muito competente. Nao gosto de escrever muito. Gostei da dra Raquel Dantas. - Ana Luiza J. Loureiro',
        rating: 5,
        photo: avatar13
    },
    {
        name: 'Dr. Arnaldo Castro',
        speciality: 'Oftalmologista',
        contact: '(31) 3281-1184',
        addres: 'Av do Contorno, 4747, 16° Andar, Lifecenter',
        city: 'Belo Horizonte',
        crm: '16054',
        about: 'adultos, crianças de qualquer idade',
        pay: 'Dinheiro, Cheque',
        formation: 'Graduação em Medicina pela Universidade Federal de Minas Gerais',
        opinion: 'Gostei do atendimento desde a recepção até a chegada no consultório médico. Médico muito atencioso e competente. - Lorena Rodrigues Araújo',
        rating: 5,
        photo: avatar14
    },
    {
        name: 'Dr. Luiz Eduardo Galvão',
        speciality: 'Dermatologista',
        contact: '(85) 3013-1112',
        addres: 'Av Engenheiro Santana Junior 3000 (Sala 1405 - Edifício Central Park)',
        city: 'Fortaleza',
        crm: '8114',
        about: 'adultos, crianças de qualquer idade',
        pay: 'Dinheiro, Cartão de Débito, Cartão de Crédito, Cheque',
        formation: 'Título de Especialista em Dermatologia, Universidade Federal do Rio de Janeiro, 2007',
        opinion: 'Médico exatamente paciente e de um carisma no profissionalismo sem igual, se todos da plataforma forem assim eu não me consulto mais presencialmente - Christiano Nunes',
        rating: 5,
        photo: avatar15
    },
    {
        name: 'Dra. Vanessa Nunes',
        speciality: 'Dermatologista',
        contact: '(41) 99172-3588',
        addres: 'Rua XV de Novembro 1234 - Conjunto 505',
        city: 'Curitiba',
        crm: '3916',
        about: 'adultos, crianças a partir dos 7 anos de idade',
        pay: 'Dinheiro, Cartão de Débito, Cartão de Crédito, Cheque',
        formation: 'Título de Especialista em Dermatologia, Universidade Federal do Rio de Janeiro, 2010',
        opinion: 'Dra Venessa é excelente em tudo. Super dedicada, comprometida e atende seus pacientes com muito carinho e cuidado. Indico de olhos fechados. - Jurema Silva',
        rating: 5,
        photo: avatar16
    }
]