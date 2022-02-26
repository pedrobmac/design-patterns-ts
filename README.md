# Padrões de Design com TypeScript

## Creational:
Os padrões de projeto de criação são padrões que abstraem o processo de instanciação e criação de objetos. Eles ajudam a tornar um sistema independente de como seus objetos são representados, criados e compostos. Geralmente, atingem este objetivo delegando tarefas para outros objetos.

Esses padrões dão muita flexibilidade ao sistema, porque encapsulam o conhecimento sobre quais classes concretas são usadas. Além disso, ocultam o modo como as instâncias são criadas e compostas. O foco é eliminar conhecimento do cliente sobre o QUE, COMO e QUANDO está sendo criado e QUEM faz parte do processo de criação. 

* **Singleton** - Garantir que uma classe tenha somente uma instância e fornecer um ponto global de acesso para ela.

* **Builder** - Separar a construção de um objeto complexo de sua representação, de modo que o mesmo processo de construção possa criar diferentes representações;

* **Prototype** - Especificar os tipos de objetos a serem criados usando uma instância prototípica e criar novos objetos copiando este protótipo;

* **Factory Method** - Definir uma interface para criar um objeto, mas deixar as subclasses decidirem qual classe a ser instanciada. O Factory Method permite a uma classe postergar (defer) a instanciação às subclasses;

* **Abstract Factory** - Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas;

## Structural:
Os padrões estruturais (structural) se preocupam com a forma como os objetos são compostos para formar estruturas maiores.

* **Composite** - Compor objetos em estruturas de árvore para representarem hierarquias partes/todo. Composite permite aos clientes tratarem de maneira uniforme objetos individuais e composições de objetos.

* **Adapter** - Converter a interface de uma classe em outra interface esperada pelos clientes. O Adapter permite que certas classes trabalhem em conjunto, o que de outra forma seria impossível, por causa de suas interfaces incompatíveis.

* **Bridge** - Separar uma abstração da sua implementação, de modo que as duas possam variar independentemente. (Implementação parecida com Adapter, mas com outra intenção.)

* **Decorator** - Agregar responsabilidades adicionais a um objeto dinamicamente. Os Decorators fornecem uma alternativa flexível às subclasses para extensão de funcionalidades. (Implementação parecida com Composite, mas com outra intenção.)

* **Façade** - Fornecer uma interface unificada para um conjunto de interfaces em um subsistema. O Façade define uma interface de nível mais alto que torna o subsistema mais fácil de usar.

* **Proxy** - Fornecer um objeto substituto ou um marcador de localização para outro objeto, a fim de controlar o acesso ao mesmo (implementação similar ao Composite e Decorator, mas com outra intenção).

* **Flyweight** - Usar compartilhamento para suportar grandes quantidades de objetos de granularidade fina, de maneira eficiente. Visa economizar memória RAM, mas adiciona complexidade à implementação.

## Behavioural:
Os padrões de projeto comportamentais se preocupam com algoritmos e a atribuição de responsabilidades entre objetos. Os padrões comportamentais não descrevem apenas padrões de objetos ou classes, mas também os padrões de comunicação entre eles. Esses padrões caracterizam fluxos de controle difíceis de seguir em tempo de execução. Eles afastam o foco do fluxo de controle para permitir que você se concentre somente na maneira como os objetos são interconectados.

* **Strategy** - Define uma família de algoritmos, encapsular cada um deles e fazê-los intercambiáveis. O strategy permite que o algoritmo varie independentemente dos clientes que o utilizam.

* **Command** - encapsula uma solicitação como um objeto, desta forma permitindo que você parametrize clientes com diferentes solicitações, enfileire ou registre (log) solicitações e suporte operações que podem ser desfeitas.

* **Memento** - sem violar a encapsulação, captura e externaliza um estado interno de um objeto, de modo que o mesmo possa posteriormente ser restaurado para este estado.

* **State** - permite que um objeto altere seu comportamento quando seu estado interno muda. O objeto parecerá ter mudado sua classe.

* **Mediator** - define um objeto que encapsula como um conjunto de objetos interage. O mediator promove o acoplamento fraco ao evitar que os objetos se refiram explicitamente uns aos outros, permitindo que você varie suas interações independentemente.

* **Chain of Responsibility** - Evita o acoplamento do remetente de uma solicitação ao seu destinatário, dando a mais de um objeto a chance de tratar a solicitação. Encadeia os objetos receptores e passa a solicitação ao longo da cadeia até que um objeto a trate.

* **Template Method** - define o esqueleto de um algoritmo em uma operação, postergando a definição de alguns passos para subclasses. O template method permite que as subclasses redefinam certos passos de um algoritmo sem mudar sua estrutura.

* **Observer** - define uma dependência um para muitos entre objetos, de modo que, quando um objeto muda de estado, todos os seus dependentes são automaticamente notificados e atualizados.

* **Iterator** - fornece uma maneira de acessar sequencialmente os elementos de um objeto agregado sem expor sua representação subjacente.

* **Visitor** - representa uma operação a ser executada sobre os elementos da estrutura de um objeto. O visitor permite que você defina uma nova operação sem mudar as classes dos elementos sobre os quais opera.

* **Interpreter** - dada uma linguagem, define um representação para sua gramática juntamente com um interpretador que usa a representação para interpretar sentenças nesta linguagem.