# Padrões de Design com TypeScript

## Creational:

* **Singleton** - Garantir que uma classe tenha somente uma instância e fornecer um ponto global de acesso para ela.

* **Builder** - Separar a construção de um objeto complexo de sua representação, de modo que o mesmo processo de construção possa criar diferentes representações;

* **Prototype** - Especificar os tipos de objetos a serem criados usando uma instância prototípica e criar novos objetos copiando este protótipo;

* **Factory Method** - Definir uma interface para criar um objeto, mas deixar as subclasses decidirem qual classe a ser instanciada. O Factory Method permite a uma classe postergar (defer) a instanciação às subclasses;

* **Abstract Factory** - Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas;

## Structural:

* **Composite** - Compor objetos em estruturas de árvore para representarem hierarquias partes/todo. Composite permite aos clientes tratarem de maneira uniforme objetos individuais e composições de objetos.

* **Adapter** - Converter a interface de uma classe em outra interface esperada pelos clientes. O Adapter permite que certas classes trabalhem em conjunto, o que de outra forma seria impossível, por causa de suas interfaces incompatíveis.

* **Bridge** - Separar uma abstração da sua implementação, de modo que as duas possam variar independentemente. (Implementação parecida com Adapter, mas com outra intenção.)

* **Decorator** - Agregar responsabilidades adicionais a um objeto dinamicamente. Os Decorators fornecem uma alternativa flexível às subclasses para extensão de funcionalidades. (Implementação parecida com Composite, mas com outra intenção.)

* **Façade** - Fornecer uma interface unificada para um conjunto de interfaces em um subsistema. O Façade define uma interface de nível mais alto que torna o subsistema mais fácil de usar.

* **Proxy** - Fornecer um objeto substituto ou um marcador de localização para outro objeto, a fim de controlar o acesso ao mesmo (implementação similar ao Composite e Decorator, mas com outra intenção).

* **Flyweight** - Usar compartilhamento para suportar grandes quantidades de objetos de granularidade fina, de maneira eficiente. Visa economizar memória RAM, mas adiciona complexidade à implementação.