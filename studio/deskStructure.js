import S from "@sanity/desk-tool/structure-builder";
import { MdBusiness, MdSettings } from "react-icons/md";
import { FaFile } from "react-icons/fa";

const hiddenTypes = [
  "category",
  "companyInfo",
  "page",
  "person",
  "post",
  "project",
  "painting",
  "photograph",
  "notebook",
  "commission",
  "siteSettings",
  "book"
];

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Paintings")
        .schemaType("painting")
        .child(S.documentTypeList("painting")),
      S.listItem()
        .title("Photographs")
        .schemaType("photograph")
        .child(S.documentTypeList("photograph")),
      S.listItem()
        .title("Notebooks")
        .schemaType("notebook")
        .child(S.documentTypeList("notebook")),
      S.listItem()
        .title("Commissions")
        .schemaType("commission")
        .child(S.documentTypeList("commission")),
      S.listItem()
        .title("Books")
        .schemaType("book")
        .child(S.documentTypeList("book")),
      S.listItem()
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(MdSettings),

      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
    ]);
