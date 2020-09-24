/* ------------------------------------ */
/* Initialize module                    */
/* ------------------------------------ */

let userIdsToShowItems = [ "5d24f4ba6154fxGM", "5d44a07c9fc5exGM" ];

// Remove settings to configure modules or exit to the setup screen.
Hooks.on("renderSettings", (app, html) => {
  if (!userIdsToShowItems .includes(game.userId) {
    html.find('button[data-action="setup"]').remove();
    html.find('button[data-action="modules"]').remove();
    html.find('button[data-action="configure"]').remove();
  }
});

// Remove dialog links to return to the setup screen.
Hooks.on("renderMainMenu", (app, html, items) => {
  if (!userIdsToShowItems .includes(game.userId) {
    html.find('.menu-players').remove();
    html.find('.menu-world').remove();
  }
});

// Remove the disable-admin module so that it can't be... disabled.
Hooks.on("renderModuleManagement", (app, html, options) => {
  if (!userIdsToShowItems .includes(game.userId) {
    html.find('li[data-module-name="disable-admin"]').remove();
  }
});