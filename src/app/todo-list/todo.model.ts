export class Todo {
  // 事項名稱
  private title = '';
  // 完成與否
  private completed = false;

  // private 避免外部可隨意修改此值，若不加上 private 的宣告即為公有

  // 覆寫建構式
  constructor(title: string) {
    this.title = title || '';
  }

  // 此事項是否已經完成
  get done(): boolean {
    return this.completed;
  }

  // 取得事項名稱
  getTitle(): string {
    return this.title;
  }

  // 切換完成狀態
  toggleCompletion(): void {
    this.completed = !this.completed;
  }
}
