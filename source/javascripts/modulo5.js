// **********************************CONSTANS****************************






const inflamacionPresentacionTab = document.getElementById("inflamacion-presentacion-side");
const inflamacionPresentacion = document.getElementById("inflamacion-presentacion");

const inflamacionObjetivosTab = document.getElementById("inflamacion-objetivos-side");
const inflamacionObjetivos = document.getElementById("inflamacion-objetivos");

const inflamacionIntroduccionTab = document.getElementById("inflamacion-introduccion-side");
const inflamacionIntroduccion = document.getElementById("inflamacion-introduccion");

const inflamacionPerfilTab = document.getElementById("inflamacion-perfil-side");
const inflamacionPerfil = document.getElementById("inflamacion-perfil");

const inflamacionSellosTab = document.getElementById("inflamacion-sellos-side");
const inflamacionSellos = document.getElementById("inflamacion-sellos");

const inflamacionEvitarTab = document.getElementById("inflamacion-evitar-side");
const inflamacionEvitar = document.getElementById("inflamacion-evitar");

const inflamacionMicroambienteTab = document.getElementById("inflamacion-microambiente-side");
const inflamacionMicroambiente = document.getElementById("inflamacion-microambiente");

const inflamacionLinfocitosTab = document.getElementById("inflamacion-linfocitos-side");
const inflamacionLinfocitos = document.getElementById("inflamacion-linfocitos");

const inflamacionCelulasTab = document.getElementById("inflamacion-celulas-side");
const inflamacionCelulas = document.getElementById("inflamacion-celulas");

const inflamacionDendriticasTab = document.getElementById("inflamacion-dendriticas-side");
const inflamacionDendriticas = document.getElementById("inflamacion-dendriticas");

const inflamacionMoleculasTab = document.getElementById("inflamacion-moleculas-side");
const inflamacionMoleculas = document.getElementById("inflamacion-moleculas");

const inflamacionFactorTab = document.getElementById("inflamacion-factor-side");
const inflamacionFactor = document.getElementById("inflamacion-factor");


const inflamacionLigandosTab = document.getElementById("inflamacion-ligandos-side");
const inflamacionLigandos = document.getElementById("inflamacion-ligandos");

const inflamacionPuntoTab = document.getElementById("inflamacion-punto-side");
const inflamacionPunto = document.getElementById("inflamacion-punto");

const inflamacionPunto2Tab = document.getElementById("inflamacion-punto2-side");
const inflamacionPunto2 = document.getElementById("inflamacion-punto2");


const inflamacionEstrategiasTab = document.getElementById("inflamacion-estrategias-side");
const inflamacionEstrategias = document.getElementById("inflamacion-estrategias");

const inflamacionVacunasTab = document.getElementById("inflamacion-vacunas-side");
const inflamacionVacunas = document.getElementById("inflamacion-vacunas");


const inflamacionBiblioTab = document.getElementById("inflamacion-biblio-side");
const inflamacionBiblio = document.getElementById("inflamacion-biblio");









const inflamacionChapters = [{tab: inflamacionPresentacionTab, content: inflamacionPresentacion} ,
                  {tab: inflamacionObjetivosTab, content: inflamacionObjetivos} ,
                  {tab: inflamacionIntroduccionTab, content: inflamacionIntroduccion},
                  {tab: inflamacionPerfilTab, content: inflamacionPerfil},
                  {tab: inflamacionSellosTab, content: inflamacionSellos},
                  {tab: inflamacionBiblioTab, content: inflamacionBiblio}
                ]





const inflamacionSubChapters = [{tab: inflamacionEvitarTab, content: inflamacionEvitar} ,
                  {tab: inflamacionMicroambienteTab, content: inflamacionMicroambiente} ,
                  {tab: inflamacionLinfocitosTab, content: inflamacionLinfocitos},
                  {tab: inflamacionCelulasTab, content: inflamacionCelulas},
                  {tab: inflamacionDendriticasTab, content: inflamacionDendriticas},
                  {tab: inflamacionMoleculasTab, content: inflamacionMoleculas},
                  {tab: inflamacionFactorTab, content: inflamacionFactor},
                  {tab: inflamacionLigandosTab, content: inflamacionLigandos},
                  {tab: inflamacionPuntoTab, content: inflamacionPunto},
                  {tab: inflamacionPunto2Tab, content: inflamacionPunto2},
                  {tab: inflamacionEstrategiasTab, content: inflamacionEstrategias},
                  {tab: inflamacionVacunasTab, content: inflamacionVacunas}
                ]











// // **********************************SIDEBAR****************************


console.log(inflamacionLigandosTab);

window.addEventListener('scroll', function(){

  inflamacionChapters.forEach(function(chapter){


    if ((chapter.content.offsetTop - 500) < (window.scrollY ) && (window.scrollY ) < ((chapter.content.offsetTop- 500 ) + chapter.content.scrollHeight)) {
      chapter.tab.classList.add('sidebar-content__item--current');        
      chapter.tab.classList.remove('sidebar__content__read');

      } else if ((window.scrollY ) >= (chapter.content.offsetTop - 500  + chapter.content.scrollHeight )){
        chapter.tab.classList.remove('sidebar-content__item--current');
        chapter.tab.classList.add('sidebar__content__read');
        // console.log(chapter.tab.classList + "is" + chapter.content.offsetTop  )
      } else if (chapter.tab.classList.contains('sidebar-content__item--current') && (chapter.content.offsetTop - 500 > (window.scrollY )))  {
        chapter.tab.classList.remove('sidebar-content__item--current');
        // chapter.tab.classList.remove('sidebar__content__read');
      }
    });

});


window.addEventListener('scroll', function(){
  inflamacionSubChapters.forEach(function(chapter){
    if ((chapter.content.offsetTop - 500) < (window.scrollY ) && (window.scrollY ) < ((chapter.content.offsetTop- 500 ) + chapter.content.scrollHeight)) {
      chapter.tab.classList.add('sidebar-content__item--current');        
      chapter.tab.classList.remove('sidebar__content__read');

      } else if ((window.scrollY ) >= (chapter.content.offsetTop - 500  + chapter.content.scrollHeight )){
        chapter.tab.classList.remove('sidebar-content__item--current');
        chapter.tab.classList.add('sidebar__content__read');
        // console.log(chapter.tab.classList + "is" + chapter.content.offsetTop  )
      } else if (chapter.tab.classList.contains('sidebar-content__item--current') && (chapter.content.offsetTop - 500 > (window.scrollY )))  {
        chapter.tab.classList.remove('sidebar-content__item--current');
        // chapter.tab.classList.remove('sidebar__content__read');
      }
    });

});


// // **************************** LOCAL STORAGE*****************************



window.addEventListener('scroll', function(){
  localStorage.setItem("windowHeight", window.scrollY  );
});

////


const inflamacion = document.getElementById('inflamacion');


  inflamacion.addEventListener("click", function(event){
    console.log("inflamacion")
    event.currentTarget.parentNode.classList.toggle("sidebar-content__invisible");
    event.currentTarget.querySelector(".fa-chevron-down").classList.toggle("sidebar-content__chevron-up");

  });


// ************************************ PHONE MENU ****************************


const inflamacionPhoneButton = document.getElementById("inflamacion-navigation__button");
const inflamacionSidebarItems = document.querySelectorAll(".sidebar-content__chapter, .sidebar-content__subchapter") ;


inflamacionPhoneButton.addEventListener("click", function(event){
  document.getElementById("sidebar").classList.toggle("width-zero");
  document.getElementById("main").classList.toggle("width-zero");
  document.getElementById("main").classList.toggle("hidden-phone-main");
  document.querySelector(".navigation__icon--1").classList.toggle("navigation__icon--1x");
  document.querySelector(".navigation__icon--3").classList.toggle("navigation__icon--3x");
  document.querySelector(".navigation__icon--2").classList.toggle("navigation__icon--2x");
  document.querySelector(".navigation__background").classList.toggle("navigation__background--small");
});


inflamacionSidebarItems.forEach(function(item){
  item.addEventListener("click", function(event){
    document.getElementById("sidebar").classList.add("width-zero");
    document.getElementById("main").classList.remove("width-zero");
    document.getElementById("main").classList.remove("hidden-phone-main");
    document.querySelector(".navigation__icon--1").classList.remove("navigation__icon--1x");
    document.querySelector(".navigation__icon--3").classList.remove("navigation__icon--3x");
    document.querySelector(".navigation__icon--2").classList.remove("navigation__icon--2x");
    document.querySelector(".navigation__background").classList.remove("navigation__background--small");
  });
});


