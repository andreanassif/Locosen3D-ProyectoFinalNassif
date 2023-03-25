import { FilesContainer } from "../../managers/files.manager";
class DaoUsersFiles extends FilesContainer {
  constructor(filename) {
    super(filename);
  }
}

export { DaoUsersFiles };