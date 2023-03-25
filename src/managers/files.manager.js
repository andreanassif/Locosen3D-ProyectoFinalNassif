import { options } from "../config/config.js";
import fs from "fs";
import { logger } from "../loggers/logger.js";

class FilesContainer {
  constructor(filename) {
    this.filename = options.fileSystem.join(
      __dirname,
      "..",
      `files/${filename}`
    );
  }

  async getById(id) {
    const objects = await this.getAll();
    const index = objects.findIndex((element) => element.id === parseInt(id));
    if (index === -1) {
      return logger.fatal({
        message: `Error: no se encontró el id ${id}`,
        error: true,
      });
    } else {
      const objectFound = objects[index];
      return logger.info({ message: objectFound, error: false });
    }
  }

  async getAll() {
    try {
      const contentFile = await fs.promises.readFile(this.filename, "utf-8");
      return JSON.parse(contentFile);
    } catch (error) {
      return [];
    }
  }

  async save(obj) {
    const objects = await this.getAll();

    let newId;
    if (objects.length === 0) {
      newId = 1;
    } else {
      newId = objects[objects.length - 1].id + 1;
    }

    const newObj = { id: newId, ...obj };
    objects.push(newObj);

    try {
      await fs.promises.writeFile(
        this.filename,
        JSON.stringify(objects, null, 2)
      );
      return logger.info(newObj);
    } catch (error) {
      return logger.error({ message: `Error al guardar: ${error}` });
    }
  }

  async updateById(info, id) {
    const objects = await this.getAll();
    const index = objects.findIndex((element) => element.id === parseInt(id));
    if (index == -1) {
      return logger.error({
        message: `Error al actualizar: no se encontró el id ${id}`,
      });
    } else {
      objects[index] = { ...info, id: parseInt(id) };
      try {
        await fs.promises.writeFile(
          this.filename,
          JSON.stringify(objects, null, 2)
        );
        return logger.info({ message: "Update successfully" });
      } catch (error) {
        return logger.error({ message: `Error al actualizar: ${error}` });
      }
    }
  }

  async deleteById(id) {
    const objects = await this.getAll();
    const index = objects.findIndex((element) => element.id === parseInt(id));
    if (index == -1) {
      return logger.error({
        message: `Error al borrar: no se encontró el id ${id}`,
      });
    }

    objects.splice(index, 1);
    try {
      await fs.promises.writeFile(
        this.filename,
        JSON.stringify(objects, null, 2)
      );
      return logger.info({ message: "delete successfully" });
    } catch (error) {
      return logger.error({ message: `Error al borrar: ${error}` });
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(this.filename, JSON.stringify([]));
      return logger.info({ message: "delete successfully" });
    } catch (error) {
      return logger.error({ message: `Error al borrar todo: ${error}` });
    }
  }
}

export { FilesContainer };
