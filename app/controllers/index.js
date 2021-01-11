import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class IndexController extends Controller {
  @tracked pinnedTask;

  @action
  setTaskAsPinned(task) {
    this.pinnedTask = task.toJSON();
  }

  get completedTasks() {
    const count = this.model.filter((task) => task.isComplete).length;
    return count;
  }
}
