


class KeywordCommandParser {
  private query = {params: [], sign: []};
  private command: string;

  public createQuery(command: string): {params: [], sign: []}{
    if(command.search(" AND | and | or | OR | NOT | not ") == -1){ //simple like
      return this.constructSimpleLike(command);
    }else if(command.search("\\(")){ // (x - y) - z
      return this.constructComplexLike(command);
    }else{ // x - y
      return this.constructNormalLike(command);
    }
  }

  private constructSimpleLike(command: string): {params: [], sign: []}{
    this.query.sign.push("simple");
    this.query.params.push(command);
    return this.query;
  }

  private constructNormalLike(command: string): {params: [], sign: []}{
    let params = this.findCondition(command);
    this.query.params.push(params[0]);
    this.query.params.push(params[1]);
    return this.query;
  }

  private constructComplexLike(command: string): {params: [], sign: []}{
    // parse the two lines
    let {outerCondition, innerCondition} = this.getLineConditions();
    let params = this.findCondition(innerCondition);
    this.query.params.push(params[0]);
    this.query.params.push(params[1]);
    params = this.findCondition(outerCondition);
    this.query.params.push(params.join(""));
    return this.query;
  }

  private getLineConditions() {
    let outerCondition = this.command.split(" ").join("");
    let innerConditionStart = outerCondition.search("\\(");
    let innerConditionEnd = outerCondition.search("\\)");
    let innerCondition = outerCondition.substring(innerConditionStart, innerConditionEnd + 1);
    outerCondition = outerCondition.replace(innerCondition, ""); // outter parentheses
    innerCondition = innerCondition.substring(innerConditionStart + 1, innerConditionEnd); // inner parentheses
    return {outerCondition, innerCondition};
  }

  private findCondition(condition: string) {
    if (condition.search("AND|and") != -1) {
      this.query.sign.push("AND");
      return condition.split(/AND|and/);
    } else if (condition.search("OR|or") != -1) {
      this.query.sign.push("OR");
      return condition.split(/OR|or/);
    } else if (condition.search("NOT|not") != -1) {
      this.query.sign.push("NOT");
      return condition.split(/NOT|not/);
    }
  }
}
