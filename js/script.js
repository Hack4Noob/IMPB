// Menu Mobile: Alterna a visibilidade do menu em telas menores
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Carregar conteúdo dinâmico ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    // Carregar notícias (usado em index.html)
    const noticias = [
        {
            titulo: "Inscrições Abertas para o Novo Semestre",
            resumo: "As inscrições para o próximo semestre letivo já estão abertas. Garanta sua vaga!",
            data: "15/07/2025",
            imagem: "images/noticia1.jpg"
        },
        {
            titulo: "Escola Ganha Prêmio de Excelência Educacional",
            resumo: "Nossa escola foi premiada pelo terceiro ano consecutivo pelo MEC.",
            data: "10/07/2025",
            imagem: "images/noticia2.jpg"
        },
        {
            titulo: "Feira de Ciências Atrai Mais de 500 Visitantes",
            resumo: "Evento anual supera expectativas com projetos inovadores de alunos.",
            data: "05/07/2025",
            imagem: "images/noticia3.jpg"
        }
    ];

    const noticiasContainer = document.getElementById('noticias-container');
    if (noticiasContainer) {
        noticias.forEach(noticia => {
            const noticiaCard = document.createElement('div');
            noticiaCard.className = 'noticia-card';
            noticiaCard.innerHTML = `
                <div class="noticia-img">
                    <img src="${noticia.imagem}" alt="${noticia.titulo}" loading="lazy">
                </div>
                <div class="noticia-content">
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.resumo}</p>
                    <div class="noticia-meta">
                        <span><i class="far fa-calendar-alt"></i> ${noticia.data}</span>
                        <a href="#">Leia mais</a>
                    </div>
                </div>
            `;
            noticiasContainer.appendChild(noticiaCard);
        });
    }

    // Carregar eventos (usado em index.html)
    const eventos = [
        {
            dia: "20",
            mes: "Ago",
            titulo: "Reunião de Pais e Mestres",
            descricao: "Encontro para alinhamento do semestre com os responsáveis."
        },
        {
            dia: "25",
            mes: "Ago",
            titulo: "Olimpíada de Matemática",
            descricao: "Competição anual entre os alunos do ensino médio."
        },
        {
            dia: "30",
            mes: "Set",
            titulo: "Feira Cultural Escolar",
            descricao: "Evento cultural com apresentações e exposições."
        }
    ];

    const calendarioContainer = document.getElementById('calendario');
    if (calendarioContainer) {
        eventos.forEach(evento => {
            const eventoDiv = document.createElement('div');
            eventoDiv.className = 'evento';
            eventoDiv.innerHTML = `
                <div class="evento-data">
                    <div class="evento-dia">${evento.dia}</div>
                    <div class="evento-mes">${evento.mes}</div>
                </div>
                <div class="evento-info">
                    <h3>${evento.titulo}</h3>
                    <p>${evento.descricao}</p>
                </div>
            `;
            calendarioContainer.appendChild(eventoDiv);
        });
    }

    // Formulário de contato (usado em contato.html)
    const formContato = document.getElementById('form-contato');
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (nome && email && mensagem && emailRegex.test(email)) {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                formContato.reset();
            } else {
                alert('Por favor, preencha todos os campos com um email válido.');
            }
        });
    }

    // Área administrativa (usado em adm.html)
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const usuario = document.getElementById('usuario').value.trim();
            const senha = document.getElementById('senha').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!usuario || !senha) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            if (!emailRegex.test(usuario)) {
                alert('Por favor, insira um email válido como usuário.');
                return;
            }
            // Simulação de login (substituir por backend em produção)
            if (usuario === 'admin' && senha === '123456') {
                alert('Login efetuado com sucesso! Bem-vindo à área administrativa.');
                window.location.href = 'adm-painel.html';
            } else {
                alert('Usuário ou senha incorretos. Tente novamente.');
            }
        });
    }

    // Funcionalidades do Painel Administrativo (usado em adm-painel.html)
    // Dados simulados (substituir por backend em produção)
    let alunos = [
        { id: 1, nome: 'João Silva', email: 'joao@impb-angola.com', curso: 'Energias' },
        { id: 2, nome: 'Maria Santos', email: 'maria@impb-angola.com', curso: 'Automação' }
    ];
    let professores = [
        { id: 1, nome: 'Kambala', email: 'kambala@impb-angola.com', disciplina: 'Educação' },
        { id: 2, nome: 'Ana Oliveira', email: 'ana@impb-angola.com', disciplina: 'Psicopedagogia' }
    ];
    let cursos = [
        { id: 1, nome: 'Energias', descricao: 'Curso técnico em energias renováveis.' },
        { id: 2, nome: 'Automação', descricao: 'Curso técnico em automação industrial.' }
    ];

    // Função para atualizar tabelas
    function updateTable(tableId, data, fields, editHandler, deleteHandler) {
        const tbody = document.querySelector(`#${tableId} tbody`);
        if (!tbody) return;
        tbody.innerHTML = '';
        data.forEach(item => {
            const row = document.createElement('tr');
            fields.forEach(field => {
                const cell = document.createElement('td');
                cell.textContent = item[field];
                row.appendChild(cell);
            });
            const actionsCell = document.createElement('td');
            actionsCell.className = 'action-buttons';
            actionsCell.innerHTML = `
                <button class="edit-btn" data-id="${item.id}" aria-label="Editar"><i class="fas fa-edit"></i></button>
                <button class="delete-btn" data-id="${item.id}" aria-label="Excluir"><i class="fas fa-trash"></i></button>
            `;
            row.appendChild(actionsCell);
            tbody.appendChild(row);
        });

        // Adicionar eventos aos botões
        tbody.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', () => editHandler(btn.dataset.id));
        });
        tbody.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', () => deleteHandler(btn.dataset.id));
        });
    }

    // Gerenciar Alunos
    const alunoForm = document.getElementById('aluno-form');
    if (alunoForm) {
        updateTable('alunos-table', alunos, ['nome', 'email', 'curso'], 
            (id) => {
                const aluno = alunos.find(a => a.id == id);
                document.getElementById('aluno-nome').value = aluno.nome;
                document.getElementById('aluno-email').value = aluno.email;
                document.getElementById('aluno-curso').value = aluno.curso;
                alunoForm.dataset.editId = id;
            },
            (id) => {
                if (confirm('Deseja excluir este aluno?')) {
                    alunos = alunos.filter(a => a.id != id);
                    updateTable('alunos-table', alunos, ['nome', 'email', 'curso']);
                }
            }
        );

        alunoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('aluno-nome').value.trim();
            const email = document.getElementById('aluno-email').value.trim();
            const curso = document.getElementById('aluno-curso').value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!nome || !email || !curso) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            if (!emailRegex.test(email)) {
                alert('Por favor, insira um email válido.');
                return;
            }
            if (alunoForm.dataset.editId) {
                const id = parseInt(alunoForm.dataset.editId);
                alunos = alunos.map(a => a.id === id ? { id, nome, email, curso } : a);
                delete alunoForm.dataset.editId;
            } else {
                const id = alunos.length ? Math.max(...alunos.map(a => a.id)) + 1 : 1;
                alunos.push({ id, nome, email, curso });
            }
            updateTable('alunos-table', alunos, ['nome', 'email', 'curso']);
            alunoForm.reset();
        });
    }

    // Gerenciar Professores
    const professorForm = document.getElementById('professor-form');
    if (professorForm) {
        updateTable('professores-table', professores, ['nome', 'email', 'disciplina'],
            (id) => {
                const professor = professores.find(p => p.id == id);
                document.getElementById('professor-nome').value = professor.nome;
                document.getElementById('professor-email').value = professor.email;
                document.getElementById('professor-disciplina').value = professor.disciplina;
                professorForm.dataset.editId = id;
            },
            (id) => {
                if (confirm('Deseja excluir este professor?')) {
                    professores = professores.filter(p => p.id != id);
                    updateTable('professores-table', professores, ['nome', 'email', 'disciplina']);
                }
            }
        );

        professorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('professor-nome').value.trim();
            const email = document.getElementById('professor-email').value.trim();
            const disciplina = document.getElementById('professor-disciplina').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!nome || !email || !disciplina) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            if (!emailRegex.test(email)) {
                alert('Por favor, insira um email válido.');
                return;
            }
            if (professorForm.dataset.editId) {
                const id = parseInt(professorForm.dataset.editId);
                professores = professores.map(p => p.id === id ? { id, nome, email, disciplina } : p);
                delete professorForm.dataset.editId;
            } else {
                const id = professores.length ? Math.max(...professores.map(p => p.id)) + 1 : 1;
                professores.push({ id, nome, email, disciplina });
            }
            updateTable('professores-table', professores, ['nome', 'email', 'disciplina']);
            professorForm.reset();
        });
    }

    // Gerenciar Cursos
    const cursoForm = document.getElementById('curso-form');
    if (cursoForm) {
        updateTable('cursos-table', cursos, ['nome', 'descricao'],
            (id) => {
                const curso = cursos.find(c => c.id == id);
                document.getElementById('curso-nome').value = curso.nome;
                document.getElementById('curso-descricao').value = curso.descricao;
                cursoForm.dataset.editId = id;
            },
            (id) => {
                if (confirm('Deseja excluir este curso?')) {
                    cursos = cursos.filter(c => c.id != id);
                    updateTable('cursos-table', cursos, ['nome', 'descricao']);
                }
            }
        );

        cursoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('curso-nome').value.trim();
            const descricao = document.getElementById('curso-descricao').value.trim();
            if (!nome || !descricao) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            if (cursoForm.dataset.editId) {
                const id = parseInt(cursoForm.dataset.editId);
                cursos = cursos.map(c => c.id === id ? { id, nome, descricao } : c);
                delete cursoForm.dataset.editId;
            } else {
                const id = cursos.length ? Math.max(...cursos.map(c => c.id)) + 1 : 1;
                cursos.push({ id, nome, descricao });
            }
            updateTable('cursos-table', cursos, ['nome', 'descricao']);
            cursoForm.reset();
        });
    }

    // Gerenciar Relatórios
    const relatorioForm = document.getElementById('relatorio-form');
    if (relatorioForm) {
        relatorioForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const tipo = document.getElementById('relatorio-tipo').value;
            const output = document.getElementById('relatorio-output');
            output.innerHTML = '';
            let data;
            if (tipo === 'alunos') data = alunos;
            else if (tipo === 'professores') data = professores;
            else if (tipo === 'cursos') data = cursos;
            else {
                output.innerHTML = '<p>Por favor, selecione um tipo de relatório.</p>';
                return;
            }
            output.innerHTML = `<h3>Relatório de ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</h3>`;
            const table = document.createElement('table');
            table.className = 'admin-table';
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');
            const fields = tipo === 'alunos' ? ['nome', 'email', 'curso'] :
                           tipo === 'professores' ? ['nome', 'email', 'disciplina'] :
                           ['nome', 'descricao'];
            thead.innerHTML = `<tr>${fields.map(f => `<th>${f.charAt(0).toUpperCase() + f.slice(1)}</th>`).join('')}</tr>`;
            data.forEach(item => {
                const row = document.createElement('tr');
                fields.forEach(field => {
                    const cell = document.createElement('td');
                    cell.textContent = item[field];
                    row.appendChild(cell);
                });
                tbody.appendChild(row);
            });
            table.appendChild(thead);
            table.appendChild(tbody);
            output.appendChild(table);
        });
    }

    // Navegação entre seções do painel
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    if (sidebarLinks) {
        sidebarLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.getAttribute('href').substring(1);
                document.querySelectorAll('.admin-section').forEach(section => {
                    section.classList.remove('active');
                });
                document.querySelectorAll('.sidebar-link').forEach(l => {
                    l.classList.remove('active');
                });
                document.getElementById(sectionId).classList.add('active');
                link.classList.add('active');
            });
        });
    }

    // Exportar relatórios como CSV
    function exportToCSV(data, fields, filename) {
        const csv = ['\ufeff' + fields.join(','), ...data.map(item => fields.map(f => `"${item[f]}"`).join(','))].join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }

    // Botão de exportação no painel
    const relatorioOutput = document.getElementById('relatorio-output');
    if (relatorioOutput) {
        const exportBtn = document.createElement('button');
        exportBtn.textContent = 'Exportar como CSV';
        exportBtn.style.padding = '10px 20px';
        exportBtn.style.backgroundColor = '#3498db';
        exportBtn.style.color = '#ffffff';
        exportBtn.style.border = 'none';
        exportBtn.style.borderRadius = '8px';
        exportBtn.style.marginTop = '16px';
        exportBtn.style.cursor = 'pointer';
        exportBtn.addEventListener('click', () => {
            const tipo = document.getElementById('relatorio-tipo').value;
            let data, fields, filename;
            if (tipo === 'alunos') {
                data = alunos;
                fields = ['nome', 'email', 'curso'];
                filename = 'relatorio_alunos.csv';
            } else if (tipo === 'professores') {
                data = professores;
                fields = ['nome', 'email', 'disciplina'];
                filename = 'relatorio_professores.csv';
            } else if (tipo === 'cursos') {
                data = cursos;
                fields = ['nome', 'descricao'];
                filename = 'relatorio_cursos.csv';
            } else {
                alert('Por favor, gere um relatório primeiro.');
                return;
            }
            exportToCSV(data, fields, filename);
        });
        relatorioOutput.insertAdjacentElement('afterend', exportBtn);
    }
});