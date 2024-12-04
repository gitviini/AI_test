interface FileItem {
  id: number;
  name: string | undefined;
  form: FormData | void | undefined;
}

export default FileItem;
