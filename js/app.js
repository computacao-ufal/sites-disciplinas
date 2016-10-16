var app = angular.module('Disc', []);

app.controller("mainCtrl", ["$scope", function($scope){
  $scope.details = [
    {"professor":"Baldoino Fonseca",
     "img":"https://lh3.googleusercontent.com/-zBPmMmdJytc/AAAAAAAAAAI/AAAAAAAAAuA/K_wCRtx-NBw/photo.jpg",
     "disciplines":[{
       "name":"Programação 1",
       "course":"Ciência da Computação",
       "semester":"2016.1",
       "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur risus et tincidunt porttitor. Mauris interdum sapien at risus pharetra efficitur. Cras malesuada magna non ex sollicitudin, vel pretium tortor auctor. Phasellus enim risus, feugiat quis urna non, dictum condimentum tellus. In et ex neque. Duis in dignissim eros, ac iaculis nibh. Etiam ut mi felis. Mauris mattis magna sed neque scelerisque tempus. Suspendisse ut ante lacinia, porttitor ex facilisis, blandit nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
       "link":"https://sites.google.com/a/ic.ufal.br/ecom002/"
     },
     {
       "name":"Projeto de software",
       "course":"Ciência da Computação",
       "description":"Integer imperdiet ullamcorper sapien. Phasellus molestie luctus magna, eu vulputate lacus congue non. Praesent viverra tempus justo a semper. Curabitur interdum velit augue, nec euismod diam mattis finibus. Integer in orci vel orci tristique volutpat sit amet a nulla. Aliquam et risus venenatis, consequat lacus ut, ultrices neque. Pellentesque maximus porttitor suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec venenatis molestie neque, sollicitudin convallis velit tristique vitae. Sed eu convallis justo, et rutrum purus. Curabitur auctor cursus nulla, vitae tincidunt risus dictum sit amet.",
       "semester":"2016.1",
       "link":"https://sites.google.com/a/ic.ufal.br/comp215/"
     },
    ],
  },
  {"professor":"Rodrigo Paes",
   "img":"http://edgebr.org/wp-content/uploads/2016/06/Untitled2.png",
   "disciplines":[
     {
       "name":"Programação 1",
       "course":"Engenharia da Computação",
       "semester":"2016.1",
       "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur risus et tincidunt porttitor. Mauris interdum sapien at risus pharetra efficitur. Cras malesuada magna non ex sollicitudin, vel pretium tortor auctor. Phasellus enim risus, feugiat quis urna non, dictum condimentum tellus. In et ex neque. Duis in dignissim eros, ac iaculis nibh. Etiam ut mi felis. Mauris mattis magna sed neque scelerisque tempus. Suspendisse ut ante lacinia, porttitor ex facilisis, blandit nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
       "link":"Valei-me"
     },
     {
       "name":"P. e Análise de Algoritmos",
       "course": "Ciência/Engenharia da Computação",
       "description":"Integer imperdiet ullamcorper sapien. Phasellus molestie luctus magna, eu vulputate lacus congue non. Praesent viverra tempus justo a semper. Curabitur interdum velit augue, nec euismod diam mattis finibus. Integer in orci vel orci tristique volutpat sit amet a nulla. Aliquam et risus venenatis, consequat lacus ut, ultrices neque. Pellentesque maximus porttitor suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec venenatis molestie neque, sollicitudin convallis velit tristique vitae. Sed eu convallis justo, et rutrum purus. Curabitur auctor cursus nulla, vitae tincidunt risus dictum sit amet.",
       "semester":"2016.1",
       "link":"https://sites.google.com/site/ldsicufal/disciplinas/projeto-e-analise-de-algoritmos"
     },
     {
       "name":"Programação Avançada",
       "course":"Ciência/Engenharia da Computação",
       "semester":"2016.1",
       "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur risus et tincidunt porttitor. Mauris interdum sapien at risus pharetra efficitur. Cras malesuada magna non ex sollicitudin, vel pretium tortor auctor. Phasellus enim risus, feugiat quis urna non, dictum condimentum tellus. In et ex neque. Duis in dignissim eros, ac iaculis nibh. Etiam ut mi felis. Mauris mattis magna sed neque scelerisque tempus. Suspendisse ut ante lacinia, porttitor ex facilisis, blandit nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
       "link":"https://sites.google.com/site/ldsicufal/disciplinas/programacao-avancada"
     }
  ],
},
{"professor":"Márcio Ribeiro",
 "img":"https://sites.google.com/a/ic.ufal.br/marcio/_/rsrc/1472851299080/config/customLogo.gif?revision=11",
 "disciplines":[
   {
     "name":"Estruturas de dados",
     "course":"Ciência da Computação",
     "semester":"2016.1",
     "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur risus et tincidunt porttitor. Mauris interdum sapien at risus pharetra efficitur. Cras malesuada magna non ex sollicitudin, vel pretium tortor auctor. Phasellus enim risus, feugiat quis urna non, dictum condimentum tellus. In et ex neque. Duis in dignissim eros, ac iaculis nibh. Etiam ut mi felis. Mauris mattis magna sed neque scelerisque tempus. Suspendisse ut ante lacinia, porttitor ex facilisis, blandit nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
     "link":"https://sites.google.com/a/ic.ufal.br/comp208/"
   },
   {
     "name":"Programação 3",
     "course": "Ciência/Engenharia da Computação",
     "description":"Integer imperdiet ullamcorper sapien. Phasellus molestie luctus magna, eu vulputate lacus congue non. Praesent viverra tempus justo a semper. Curabitur interdum velit augue, nec euismod diam mattis finibus. Integer in orci vel orci tristique volutpat sit amet a nulla. Aliquam et risus venenatis, consequat lacus ut, ultrices neque. Pellentesque maximus porttitor suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec venenatis molestie neque, sollicitudin convallis velit tristique vitae. Sed eu convallis justo, et rutrum purus. Curabitur auctor cursus nulla, vitae tincidunt risus dictum sit amet.",
     "semester":"2016.1",
     "link":"https://sites.google.com/a/ic.ufal.br/comp215/"
   },
   {
     "name":"L. Produto de Software",
     "course":"Ciência/Engenharia da Computação",
     "semester":"2016.1",
     "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur risus et tincidunt porttitor. Mauris interdum sapien at risus pharetra efficitur. Cras malesuada magna non ex sollicitudin, vel pretium tortor auctor. Phasellus enim risus, feugiat quis urna non, dictum condimentum tellus. In et ex neque. Duis in dignissim eros, ac iaculis nibh. Etiam ut mi felis. Mauris mattis magna sed neque scelerisque tempus. Suspendisse ut ante lacinia, porttitor ex facilisis, blandit nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
     "link":"https://sites.google.com/site/ldsicufal/disciplinas/programacao-avancada"
   }
],
},
{"professor":"Fábio Coutinho",
 "img":"img/professor.png",
 "disciplines":[
   {
     "name":"Banco de Dados 1",
     "course":"Ciência/Engenharia da Computação",
     "semester":"2016.1",
     "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur risus et tincidunt porttitor. Mauris interdum sapien at risus pharetra efficitur. Cras malesuada magna non ex sollicitudin, vel pretium tortor auctor. Phasellus enim risus, feugiat quis urna non, dictum condimentum tellus. In et ex neque. Duis in dignissim eros, ac iaculis nibh. Etiam ut mi felis. Mauris mattis magna sed neque scelerisque tempus. Suspendisse ut ante lacinia, porttitor ex facilisis, blandit nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
     "link":"https://sites.google.com/a/ic.ufal.br/comp220/"
   },
   {
     "name":"Banco de Dados 2",
     "course": "Ciência/Engenharia da Computação",
     "description":"Integer imperdiet ullamcorper sapien. Phasellus molestie luctus magna, eu vulputate lacus congue non. Praesent viverra tempus justo a semper. Curabitur interdum velit augue, nec euismod diam mattis finibus. Integer in orci vel orci tristique volutpat sit amet a nulla. Aliquam et risus venenatis, consequat lacus ut, ultrices neque. Pellentesque maximus porttitor suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec venenatis molestie neque, sollicitudin convallis velit tristique vitae. Sed eu convallis justo, et rutrum purus. Curabitur auctor cursus nulla, vitae tincidunt risus dictum sit amet.",
     "semester":"2016.1",
     "link":"https://sites.google.com/a/ic.ufal.br/comp227/"
   },
   {
     "name":"Tópicos Especiais em BD",
     "course":"Ciência/Engenharia da Computação",
     "semester":"2016.1",
     "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur risus et tincidunt porttitor. Mauris interdum sapien at risus pharetra efficitur. Cras malesuada magna non ex sollicitudin, vel pretium tortor auctor. Phasellus enim risus, feugiat quis urna non, dictum condimentum tellus. In et ex neque. Duis in dignissim eros, ac iaculis nibh. Etiam ut mi felis. Mauris mattis magna sed neque scelerisque tempus. Suspendisse ut ante lacinia, porttitor ex facilisis, blandit nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
     "link":"https://sites.google.com/a/ic.ufal.br/comp309/"
   }
],
},
{"professor":"Leandro Sales",
 "img":"https://sites.google.com/site/leandroal/_/rsrc/1362597575177/home/_DSC0017%20com%20o%20corte%20MENORMENOR.jpg",
 "disciplines":[
   {
     "name":"Redes de Computadores 1",
     "course":"Ciência da Computação",
     "semester":"2015.2",
     "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur risus et tincidunt porttitor. Mauris interdum sapien at risus pharetra efficitur. Cras malesuada magna non ex sollicitudin, vel pretium tortor auctor. Phasellus enim risus, feugiat quis urna non, dictum condimentum tellus. In et ex neque. Duis in dignissim eros, ac iaculis nibh. Etiam ut mi felis. Mauris mattis magna sed neque scelerisque tempus. Suspendisse ut ante lacinia, porttitor ex facilisis, blandit nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
     "link":"https://sites.google.com/site/leandroal/disciplinas/redes-1-2015-2"
   }
],
},
{"professor":"André Aquino",
 "img":"http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4762898Y9",
 "disciplines":[
   {
     "name":"P. e Análise de Algoritmos",
     "course":"Ciência da Computação",
     "semester":"2015.2",
     "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur risus et tincidunt porttitor. Mauris interdum sapien at risus pharetra efficitur. Cras malesuada magna non ex sollicitudin, vel pretium tortor auctor. Phasellus enim risus, feugiat quis urna non, dictum condimentum tellus. In et ex neque. Duis in dignissim eros, ac iaculis nibh. Etiam ut mi felis. Mauris mattis magna sed neque scelerisque tempus. Suspendisse ut ante lacinia, porttitor ex facilisis, blandit nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
     "link":"https://sites.google.com/site/allalinsufal/home/comp037/20152"
   },
   {
     "name":"Sistemas Operacionais",
     "course":"Ciência da Computação",
     "semester":"2015.2",
     "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur risus et tincidunt porttitor. Mauris interdum sapien at risus pharetra efficitur. Cras malesuada magna non ex sollicitudin, vel pretium tortor auctor. Phasellus enim risus, feugiat quis urna non, dictum condimentum tellus. In et ex neque. Duis in dignissim eros, ac iaculis nibh. Etiam ut mi felis. Mauris mattis magna sed neque scelerisque tempus. Suspendisse ut ante lacinia, porttitor ex facilisis, blandit nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
     "link":"https://sites.google.com/site/allalinsufal/home/comp-262/20152"
   },
],
},
{"professor":"André Lage",
 "img":"http://eventos.unit.br/seminfo/wp-content/uploads/sites/30/2016/09/and.jpg",
 "disciplines":[
   {
     "name":"Sistemas Distribuídos",
     "course":"Ciência da Computação",
     "semester":"2015.2",
     "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur risus et tincidunt porttitor. Mauris interdum sapien at risus pharetra efficitur. Cras malesuada magna non ex sollicitudin, vel pretium tortor auctor. Phasellus enim risus, feugiat quis urna non, dictum condimentum tellus. In et ex neque. Duis in dignissim eros, ac iaculis nibh. Etiam ut mi felis. Mauris mattis magna sed neque scelerisque tempus. Suspendisse ut ante lacinia, porttitor ex facilisis, blandit nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
     "link":"https://sites.google.com/a/ic.ufal.br/andrelage/home/lectures/2015-2"
   }
],
},
{"professor":"Fábio Paraguaçu",
 "img":"http://lh3.googleusercontent.com/-U0fTCgeicWo/AAAAAAAAAAI/AAAAAAAAKGQ/DBJ4rO3wdk0/photo.jpg",
 "disciplines":[
   {
     "name":"Plataforma Guinteract",
     "course":"Ciência da Computação",
     "semester":"2015.2",
     "description":"Todas as disciplinas estão na plataforma Guinteract",
     "link":"http://guinteract.com.br/course/index.php?categoryid=4"
   }
],
},
];
$scope.collaborators = [
  {"name": "Naelson Douglas",
   "collaboration": "Ideia"
  },
  {"name": "Eric Araújo",
   "collaboration": "Front-end"
  },
];
}]);
