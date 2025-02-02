export const getFlagsAPI = async () => {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all", {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Exibir os dados retornados
        return data; // Retorna os dados para uso em outro lugar
    } catch (error) {
        console.error("Erro ao buscar bandeiras:", error);
        return []; // Ou lançar o erro dependendo do que deseja fazer
    }
};
