import { TreeType } from "./TreeType";

export class TreeFactory {
  public static treeTypes = new Map<string, TreeType>()

  public static getTreeType(name: string, color: string, otherTreeData: string) {
    let result = this.treeTypes.get(name);

    if (result == undefined) {
      result = new TreeType(name, color, otherTreeData);
      this.treeTypes.set(name, result);
    }
    return result;
  }
}
