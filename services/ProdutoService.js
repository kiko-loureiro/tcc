import http from "../common/http-common.js";
const API_URL = "produto/";
 
const findAll = () => {
  return http.mainInstance.get(API_URL + "findAll");
};
 
const findById = id => {
  return http.mainInstance.get(API_URL + `findById/${id}`);
};
 
const getCategorias = () => {
  return http.mainInstance.get(API_URL + "getCategorias");
};
 
const createNew = (file, data) => {
 
  const formData = new FormData();
  formData.append('file', file);
  formData.append('nome', data.nome);
  formData.append('descricao', data.descricao);
  formData.append('codigoBarras', data.codigoBarras);
  formData.append('preco', data.preco);
  formData.append('categoria', data.categoria);
 
  for (const key of formData.entries()) {
    console.log(key[0] + ', ' + key[1]);
}
 
  return http.multipartInstance.post(API_URL + "createNew", formData);
};
 
const ProdutoService = {
  findAll,
  findById,
  getCategorias,
  createNew,
 
};
 
export default ProdutoService;