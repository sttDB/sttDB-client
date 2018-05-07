export class KeywordCommandParser {
  private query = {params: [], sign: []};

  constructor() {
  }

  public correctCommand(command: string): boolean {
    let badParenthesesOrder = command.match(/(?=.*\()(?=.*\)).*/g) == null && command.match(/[()]/g) != null;
    let operandOverflow = command.match(/AND|OR|NOT/g).length > 2;
    let badComplexQuery = command.match(/AND|OR|NOT/g).length == 2 && command.match(/(?=.*\()(?=.*\)).*/g) == null;
    let badSimpleQuery = command.match(/AND|OR|NOT/g).length == 1 && command.match(/(?=.*\()(?=.*\)).*/g) != null;
    return !(badParenthesesOrder || operandOverflow || badComplexQuery || badSimpleQuery);
  }

  public createQuery(command: string): { params: string[], sign: string[] } {
    if (command.search(" AND | OR | NOT ") == -1) { // x
      return this.constructSimpleLike(command);
    } else if (command.search("\\(") != -1) { // (x - y) - z
      return this.constructComplexLike(command);
    } else { // x - y
      return this.constructNormalLike(command);
    }
  }

  private constructSimpleLike(command: string): { params: string[], sign: string[] } {
    this.query.sign.push("simple");
    this.query.params.push(command);
    return this.query;
  }

  private constructNormalLike(command: string): { params: string[], sign: string[] } {
    let params = this.findCondition(command);
    this.query.params.push(params[0].substring(0, params[0].length - 1));
    this.query.params.push(params[1].substring(1, params[0].length));
    return this.query;
  }

  private constructComplexLike(command: string): { params: string[], sign: string[] } {
    let {outerCondition, innerCondition} = this.getLineConditions(command);
    let params = this.findCondition(innerCondition);
    this.query.params.push(params[0]);
    this.query.params.push(params[1]);
    params = this.findCondition(outerCondition);
    this.query.params.push(params.join(""));
    return this.query;
  }

  private getLineConditions(command: string) {
    // separate two conditions
    let outerCondition = command.split(" ").join("");
    let innerConditionStart = outerCondition.search("\\(");
    let innerConditionEnd = outerCondition.search("\\)");
    let innerCondition = outerCondition.substring(innerConditionStart, innerConditionEnd + 1);
    outerCondition = outerCondition.replace(innerCondition, ""); // outter parentheses
    innerCondition = innerCondition.substring(innerConditionStart + 1, innerConditionEnd); // inner parentheses
    return {outerCondition, innerCondition};
  }

  private findCondition(condition: string) {
    if (condition.search("AND") != -1) {
      this.query.sign.push("AND");
      return condition.split(/AND/);
    } else if (condition.search("OR") != -1) {
      this.query.sign.push("OR");
      return condition.split(/OR/);
    } else if (condition.search("NOT") != -1) {
      this.query.sign.push("NOT");
      return condition.split(/NOT/);
    }
  }
}
