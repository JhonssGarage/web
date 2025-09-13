const services = [
    {   
        id: 'lavada',
        category: 'Lavada',
        background: '',
        description: 'A categoria de Lavadas oferece processos de limpeza técnica que vão muito além de uma simples lavagem. Cada serviço é realizado com produtos de alta qualidade e métodos seguros, garantindo remoção de sujeiras sem agredir a pintura, plásticos ou metais. Do motor ao chassi, passando por lavadas detalhadas em carros e motocicletas, o objetivo é devolver o aspecto de novo e aumentar a durabilidade do veículo.',
        services: [
            {
                service: 'Lavada técnica',
                description: 'Limpeza completa e segura, com técnicas que preservam a pintura e realçam o brilho.',
                value: 250.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Lavada técnica detalhada',
                description: 'Higienização minuciosa, alcançando frisos, rodas e áreas de difícil acesso.',
                value: 450.00,
                // background: './imgs/engine.webp'
            },
            {
                service: 'Lavada técnica de motor',
                description: 'Cofre do motor limpo com segurança, sem riscos para os componentes.',
                value: 250.00,
                // background: './imgs/wheels.webp'
            },
            {
                service: 'Lavada técnica de chassis',
                description: 'Remoção de resíduos que causam corrosão, aumentando a durabilidade do veículo.',
                value: 280.00,
                // background: './imgs/wheels.webp'
            },
            {
                service: 'Lavada técnica detalhada em motocicletas',
                description: 'Limpeza criteriosa em toda a moto, protegendo metais e plásticos.',
                value: 200.00,
                // background: './imgs/wheels.webp'
            }               
        ]
    },
    {   
        id: 'higienizacao',
        category: 'Higienização Interna',
        background: '',   
        description: 'Mais do que estética, a higienização interna é sinônimo de saúde e bem-estar. Os serviços dessa categoria eliminam sujeiras, manchas, odores e microrganismos, mantendo o interior do veículo sempre limpo e agradável. Seja com a limpeza completa, focada nos bancos ou no sistema de ar-condicionado, o cuidado é total para garantir conforto e qualidade de vida a cada viagem.',     
        services: [
            {
                service: 'Higienização interna completa',
                description: 'Limpeza profunda em todo o interior do veículo, eliminando sujeiras, odores e microrganismos.',
                value: 400.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Higienização dos bancos',
                description: 'Tratamento especializado em tecidos ou couro, removendo manchas e devolvendo a aparência original.',
                value: 250.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Higienização de ar condicionado',
                description: 'Eliminação de fungos e bactérias do sistema, garantindo ar puro e saudável dentro do carro.',
                value: 200.00,
                // background: './imgs/tradicional_washing.webp'
            }
        ]
    },
    {   
        id: 'polimento',
        category: 'Polimento',
        background: '',
        description: 'Os serviços de polimento trazem de volta o brilho e a profundidade da pintura, corrigindo imperfeições e revitalizando superfícies. Seja no tratamento técnico, comercial, em vidros, faróis ou motocicletas, o processo é realizado com precisão para valorizar a estética do veículo e proteger contra desgastes naturais, entregando um acabamento premium.',
        services: [
            {
                service: 'Polimento técnico',
                description: 'Corrige micro-riscos e realça a profundidade da cor, devolvendo o brilho de fábrica.',
                value: 1500.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Polimento comercial',
                description: 'Realce rápido do brilho da pintura, indicado para manutenção estética.',
                value: 800.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Polimento de vidros',
                description: 'Remove manchas, marcas d’água e pequenos riscos, garantindo transparência e segurança.',
                value: 300.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Polimento de faróis',
                description: 'Recupera a transparência dos faróis, melhora a iluminação e valoriza o veículo.',
                value: 280.00,
                // background: './imgs/tradicional_washing.webp'
            },            
            {
                service: 'Polimento de motocicletas',
                description: 'Brilho intenso e uniforme em todas as partes da moto, com proteção duradoura.',
                value: 600.00,
                // background: './imgs/tradicional_washing.webp'
            }
        ]
    },
    {   
        id: 'protecoes',
        category: 'Proteções',
        description: 'A categoria de Proteções é pensada para quem deseja preservar a beleza e a durabilidade do veículo por muito mais tempo. Com tecnologias como cristalização de vidros, vitrificação de couro e plásticos, revestimentos cerâmicos de longa duração e aplicação de PPF, cada serviço cria barreiras contra os efeitos do tempo, da poluição e do uso diário, mantendo o carro sempre protegido e valorizado.',
        background: '',        
        services: [
            {
                service: 'Cristalização do para-brisas',
                description: 'Cria uma camada repelente à água, melhorando a visibilidade em dias chuvosos.',
                value: 100.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Vitrificação de bancos de couro',
                description: 'Protege contra desgaste, manchas e ressecamento, mantendo o aspecto original.',
                value: 200.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Vitrificação de plásticos',
                description: 'Restaura e protege plásticos internos e externos contra desbotamento e ressecamento.',
                value: 250.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Cristalização de todos os vidros',
                description: 'Tratamento que aumenta a transparência, facilita a limpeza e melhora a dirigibilidade sob chuva.',
                value: 250.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Revestimento cerâmico para pintura (até 1 ano de proteção)',
                description: 'Brilho intenso e proteção contra agentes externos de curta duração.',
                value: 350.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Revestimento cerâmico para pintura (até 2 anos de proteção)',
                description: 'Proteção prolongada com alta resistência e fácil manutenção da pintura.',
                value: 600.00,
                // background: './imgs/tradicional_washing.webp'
            },            
            {
                service: 'Revestimento cerâmico para pintura (até 3 anos de proteção)',
                description: 'Blindagem premium contra intempéries, preservando o brilho por longo prazo.',
                value: 950.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Aplicação PPF quinas e conchas',
                description: 'Filme de proteção em áreas estratégicas contra riscos, impactos e desgaste do uso diário.',
                value: 500.00,
                // background: './imgs/tradicional_washing.webp'
            }            
        ]
    },
    {   
        id: 'outros',
        category: 'Outros Serviços',
        background: '',
        description: 'Nesta categoria estão soluções complementares que fazem toda a diferença no visual e conservação do veículo. Desde insulfilm, martelinho de ouro e restauração de bancos, até pinturas personalizadas e descontaminação de vidros, cada serviço é realizado com atenção aos detalhes, oferecendo estilo, praticidade e valorização ao seu automóvel.',
        services: [
            {
                service: 'Aplicação de insulfilm',
                description: 'Conforto térmico, proteção UV e mais privacidade para o veículo.',
                value: 400.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Martelinho de ouro',
                description: 'Remoção de amassados leves sem necessidade de pintura.',
                value: 200.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Revestimento de volante',
                description: 'Renovação do volante com acabamento premium e antiderrapante.',
                value: 300.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Pinturas em geral e personalização',
                description: 'Estilo exclusivo para o veículo com cores e acabamentos personalizados.',
                value: 650.00, // A partir de 650 a peça
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Pintura de rodas',
                description: 'Recupera ou transforma o visual das rodas com durabilidade e sofisticação',
                value: 600.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Pintura de pinças de freio',
                description: 'Destaque esportivo e proteção contra oxidação.',
                value: 600.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Restauração e pintura de bancos de couro',
                description: 'Tratamento que renova couro desgastado, devolvendo aparência de novo.',
                value: 1000.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Descontaminação de vidros',
                description: 'Elimina resíduos impregnados, devolvendo transparência e facilitando a limpeza.',
                value: 200.00,
                // background: './imgs/tradicional_washing.webp'
            }
        ]
    }
];

function agendarHorario() {
    sendMessage('Olá, gostaria de agendar um horário.');
}

function sendMessage(text) {
    window.open(`https://wa.me/5534984300186?text=${text}`, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});

// Adiciona o evento de clique no WhatsApp
document.addEventListener('DOMContentLoaded', () => {
    const whatsappSpan = document.getElementById('whatsapp');
    if(whatsappSpan) {
        whatsappSpan.addEventListener('click', () => {
            window.open('https://wa.me/5534984300186', '_blank');
        });
    }
});

// Reseta o scroll do sub-menu para a esquerda quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
    const subMenu = document.querySelector('.sub-menu nav');
    if(subMenu) {
        subMenu.scrollLeft = 0;
    }
});

// Gera o sub-menu e as sections dinamicamente
document.addEventListener('DOMContentLoaded', () => {
    // Gera o sub-menu
    const submenu = document.getElementById('dynamic-submenu');
    if (submenu) {
        submenu.innerHTML = services.map(s =>
            `<a href="#${s.id}">${s.category}</a>`
        ).join('');

        submenu.innerHTML += `<a href="#classificacao_do_veiculo">Clasificação do veículo</a>`;
    }

    // Gera as sections
    const main = document.getElementById('dynamic-main');
    if (main) {
        main.innerHTML = services.map(s => `
            <section class="section padding-top-200" id="${s.id}">
                <div>
                    <h2>${s.category}</h2>
                    <div class="row gy-4">
                        ${s.services.map(item => `
                            <div class="col-md-4">
                                <div class="catalog-card" style="background-size: cover; background-position: center; background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('${item.background}');">
                                    <div class="catalog-card-body">
                                        <h4>${item.service}</h4>
                                        ${item.description}<br>
                                        <hr>
                                        A partir de R$ ${item.value.toFixed(2).replace('.', ',')}
                                    </div>
                                    <button class="btn" onclick="sendMessage('Olá! Gostaria de agendar um horário para ${item.service}.')">Agendar serviço</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `).join('');

        main.innerHTML += `
                <section class="section padding-top-200" style="min-height: 100vh;" id="classificacao_do_veiculo">
                    <div>
                        <h2>Classificação do veículo</h2>
                        <p>Na Jhonss Garage, entendemos que cada veículo é único e possui suas próprias necessidades. Por isso, oferecemos uma ampla gama de serviços de detalhamento automotivo, adaptados para atender a diferentes tipos de veículos.</p>
                        <p>Para facilitar o orçamento do serviço para o seu carro, dividimos os veículos em categorias com base no comprimento aproximado. Isso nos permite oferecer serviços personalizados e garantir que cada veículo receba o cuidado e a atenção que merece.</p>
                        <p>Veja abaixo as categorias de veículos e seus respectivos comprimentos aproximados:</p>
                        <div class="table-responsive">
                            <table class="table table-dark table-striped-columns table-hover align-middle">
                                <thead>
                                    <td>Categoria</td>
                                    <td>Comprimento Aproximado</td>
                                    <td>Exemplos</td>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Pequeno (P)</td>
                                        <td>Até 4,20 metros</td>
                                        <td>Fiat Mobi, Renault Kwid, VW Up, VW Gol, VW Golf, Ford Focus Hatch, VW Saveiro (Cabine Simples), HB20, Argo, Fiat Strada (Cabine Simples)</td>
                                    </tr>
                                    <tr>
                                        <td>Médio (M)</td>
                                        <td>De 4,20 metros à 4,60 metros</td>
                                        <td>Toyota Corolla, VW Virtus, Honda Civic, HB20S, VW Nivus, Renault Duster, Jeep Renegade, Fiat Cronos, Nissan Kicks, Fiat Toro, Fiat Strada (Cabine Dupla)</td>
                                    </tr>
                                    <tr>
                                        <td>Grande (G)</td>
                                        <td>De 4,60 metros à 5,10 metros</td>
                                        <td>Toyota SW4, Jeep Commander, Jeep Compass, Chevrolet S-10, Chevrolet Trailblazer, Ford Ranger, Hilux</td>
                                    </tr>
                                    <tr>
                                        <td>Extra Grand (GG)</td>
                                        <td>Acima de 5,10 metros</td>
                                        <td>Ram 1500/2500, Ford F-150, Mercedes Sprinter, Fiat Ducato, Chevrolet Express, vans executivas</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
        `;
    }
});