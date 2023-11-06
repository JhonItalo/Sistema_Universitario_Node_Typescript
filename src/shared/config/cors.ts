const corsOptions = {
  // origin: "http://seu-site.com", // Permite somente essa origem
  methods: "GET,POST, PATCH, DELETE",
  allowedHeaders: "Content-Type,Authorization", // Cabeçalhos permitidos
};

export { corsOptions };
