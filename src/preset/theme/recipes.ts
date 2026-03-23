import {badgeRecipe} from "./recipes/badge.recipe";
import {buttonRecipe} from "./recipes/button.recipe";
import {checkmarkRecipe} from "./recipes/checkmark.recipe";
import {codeRecipe} from "./recipes/code.recipe";
import {commandRecipe} from "./recipes/command.recipe";
import {containerRecipe} from "./recipes/container.recipe";
import {headingRecipe} from "./recipes/heading.recipe";
import {iconBadgeRecipe} from "./recipes/icon-badge.recipe";
import {iconRecipe} from "./recipes/icon.recipe";
import {inputAddonRecipe} from "./recipes/input-addon.recipe";
import {inputRecipe} from "./recipes/input.recipe";
import {kbdRecipe} from "./recipes/kbd.recipe";
import {linkRecipe} from "./recipes/link.recipe";
import {markRecipe} from "./recipes/mark.recipe";
import {radiomarkRecipe} from "./recipes/radiomark.recipe";
import {separatorRecipe} from "./recipes/separator.recipe";
import {skeletonRecipe} from "./recipes/skeleton.recipe";
import {skipNavLinkRecipe} from "./recipes/skip-nav-link.recipe";
import {spinnerRecipe} from "./recipes/spinner.recipe";
import {textareaRecipe} from "./recipes/textarea.recipe";

export const recipes = {
  // Chakra UI Recipes
  badge: badgeRecipe,
  button: buttonRecipe,
  code: codeRecipe,
  container: containerRecipe,
  heading: headingRecipe,
  input: inputRecipe,
  inputAddon: inputAddonRecipe,
  kbd: kbdRecipe,
  link: linkRecipe,
  mark: markRecipe,
  separator: separatorRecipe,
  skeleton: skeletonRecipe,
  skipNavLink: skipNavLinkRecipe,
  spinner: spinnerRecipe,
  textarea: textareaRecipe,
  icon: iconRecipe,
  checkmark: checkmarkRecipe,
  radiomark: radiomarkRecipe,
  // Sonia UI
  suiCommand: commandRecipe,
  suiIconBadge: iconBadgeRecipe,
};
