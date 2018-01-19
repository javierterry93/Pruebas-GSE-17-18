//Aplicación para probar la extensión de GAS con GitHub
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp. -> Creamos el menu con submenu
  ui.createMenu('Actualizar datos')
      .addItem('Empezar ahora!!', 'menuItem1')
      .addItem("funcion2" , "menuItem2")
      .addToUi();
}

function menuItem1() {
  //Definimos una variable donde vamos a registrar un input:
  var input = Browser.inputBox("Por favor, introduce tu nombre:");
  //Esta linea muestra un mensaje de hola mundo!! al ejecutar el menuItem1
  Browser.msgBox('Bienvenido a tu primer Script con GAS '+input);
  //Añado este nuevo comentario sobre el código desde Github!!!
  //Para usar el log de GAS solo tenemos que hacer CTRL+Enter y añadir esta linea
  Logger.log("Es una prueba de Log para el nombre "+input);
}

//Esta funcion lo que hara sera mostrar el nombre de la hoja de calculo de google.

function menuItem2(){
//Obtenemos el nombre de la hdc

  var nameOtherSheet = SpreadsheetApp.openById("1dcIYBRcq047EI8ReO6HwAZVO4571yaj2M14qnDAiYv4").getName();
  var name = SpreadsheetApp.getActive().getName();
  
  //Mostramos la variable en el LOG
  
  Logger.log("Nombre de la Sheet es: "+name+" y la otra es "+ nameOtherSheet );

  
}