- Execution Context: 코드의 실행 순서와 스코프를 기억. 각각의 블록은 Lexical Environment라는 내부 오브젝트를 가지고 있다. 스코프 내부에서는 외부의 어떤 스코프에도 접근이 가능하나 외부에서 내부를 참조할 수 없다.

- Lexical Environment: 내부에 두가지 정보를 가지고 있다.

  - Envirionment Record: 현재 블럭 내부의 정보를 가지고 있다.
  - Outer Lexical Environment Reference : 부모 블럭의 외부 환경을 참조하는 정보를 저장.

- 블럭 내부에서 특정 변수에 접근하면 먼저 ER에서 찾아보고, 없을 경우 가까운 OLER을 참조해서 찾는다.
