const services = [
    {   
        id: 'lavada',
        category: 'Lavada',
        services: [
            {
                service: 'Lavada técnica',
                description: '',
                value: 250.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Lavada técnica detalhada',
                description: '',
                value: 450.00,
                // background: './imgs/engine.webp'
            },
            {
                service: 'Lavada técnica de motor',
                description: '',
                value: 250.00,
                // background: './imgs/wheels.webp'
            },
            {
                service: 'Lavada técnica de chassis',
                description: '',
                value: 280.00,
                // background: './imgs/wheels.webp'
            },
            {
                service: 'Lavada técnica detalhada em motocicletas',
                description: '',
                value: 200.00,
                // background: './imgs/wheels.webp'
            }               
        ]
    },
    {   
        id: 'higienizacao',
        category: 'Higienização Interna',
        services: [
            {
                service: 'Higienização interna completa',
                description: '',
                value: 400.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Higienização dos bancos',
                description: '',
                value: 250.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Higienização de ar condicionado',
                description: '',
                value: 200.00,
                // background: './imgs/tradicional_washing.webp'
            }
        ]
    },
    {   
        id: 'polimento',
        category: 'Polimento',
        services: [
            {
                service: 'Polimento técnico',
                description: '',
                value: 1500.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Polimento comercial',
                description: '',
                value: 800.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Polimento de vidros',
                description: '',
                value: 300.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Polimento de faróis',
                description: '',
                value: 280.00,
                // background: './imgs/tradicional_washing.webp'
            },            
            {
                service: 'Polimento de motocicletas',
                description: '',
                value: 600.00,
                // background: './imgs/tradicional_washing.webp'
            }
        ]
    },
    {   
        id: 'protecoes',
        category: 'Proteções',
        services: [
            {
                service: 'Cristalização do para-brisas',
                description: '',
                value: 100.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Vitrificação de bancos de couro',
                description: '',
                value: 200.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Vitrificação de plásticos',
                description: '',
                value: 250.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Cristalização de todos os vidros',
                description: '',
                value: 250.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Revestimento cerâmico para pintura (até 1 ano de proteção)',
                description: '',
                value: 350.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Revestimento cerâmico para pintura (até 2 anos de proteção)',
                description: '',
                value: 600.00,
                // background: './imgs/tradicional_washing.webp'
            },            
            {
                service: 'Revestimento cerâmico para pintura (até 3 anos de proteção)',
                description: '',
                value: 950.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Aplicação PPF quina e concha',
                description: '',
                value: 500.00,
                // background: './imgs/tradicional_washing.webp'
            }            
        ]
    },
    {   
        id: 'outros',
        category: 'Outros Serviços',
        services: [
            {
                service: 'Aplicação de insulfilm',
                description: '',
                value: 400.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Martelinho de ouro',
                description: '',
                value: 200.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Revestimento de volante',
                description: '',
                value: 300.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Pinturas em geral e personalização',
                description: '',
                value: 650.00, // A partir de 650 a peça
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Pintura de rodas',
                description: '',
                value: 600.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Pintura de pinças de freio',
                description: '',
                value: 600.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Restauração e pintura de bancos de couro',
                description: '',
                value: 1000.00,
                // background: './imgs/tradicional_washing.webp'
            },
            {
                service: 'Descontaminação de vidros',
                description: '',
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