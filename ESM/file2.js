// default 키워드로 내보내진 코드는 괄호 없이 가져올 수 있고 이름은 원하는 대로 정할 수 있다.
// fun1 함수는 myFunc1이라는 이름으로 가져왔다.
// defualt 키워드 없이 내보내진 코드는 괄호를 사용해서 가져오며, 사용된 이름 그대로 가져와야한다.
import myFunc1, {fun2, variable1, variable2} from "./file1";