// enums
import { AppLayoutsEnum } from "../enums/appLayouts.enum";

export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
  default: 'AppLayoutDefault.vue',
  admin: 'AppLayoutAdmin',
  auth: 'AppLayoutAuth.vue',
  error: 'AppLayoutError.vue'
}