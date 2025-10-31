export const templates = {
    home: () => `
        <h2>Bem-vindo à Home</h2>
        <p>Conteúdo carregado dinamicamente!</p>
        <form id="form">
            <input type="text" name="nome" placeholder="Digite seu nome" required>
            <input type="email" name="email" placeholder="Digite seu email" required>
            <button type="submit">Enviar</button>
        </form>
        <div id="form-message"></div>
    `,
    about: () => `
        <h2>Sobre</h2>
        <p>Esta é uma página criada dinamicamente usando templates JS.</p>
    `
};
