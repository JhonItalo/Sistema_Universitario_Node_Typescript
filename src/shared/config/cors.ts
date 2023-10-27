const corsOptions = {
  // origin: "http://seu-site.com", // Permite somente essa origem
  methods: "GET,POST, PATCH, DELETE", // Apenas permite os métodos GET e POST
  allowedHeaders: "Content-Type,Authorization", // Cabeçalhos permitidos
};

export { corsOptions };
