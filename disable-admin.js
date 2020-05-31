/* ------------------------------------ */
/* Initialize module                    */
/* ------------------------------------ */
Hooks.on("init", () => {
  // CONFIG.debug.hooks = true
  const demoText = `
=============================================================
    ____  ________  _______     __  _______  ____  ______
   / __ \\/ ____/  |/  / __ \\   /  |/  / __ \\/ __ \\/ ____/
  / / / / __/ / /|_/ / / / /  / /|_/ / / / / / / / __/
 / /_/ / /___/ /  / / /_/ /  / /  / / /_/ / /_/ / /___
/_____/_____/_/  /_/\\____/  /_/  /_/\\____/_____/_____/

          _______   _____    ____  __    __________
         / ____/ | / /   |  / __ )/ /   / ____/ __ \\
        / __/ /  |/ / /| | / __  / /   / __/ / / / /
       / /___/ /|  / ___ |/ /_/ / /___/ /___/ /_/ /
      /_____/_/ |_/_/  |_/_____/_____/_____/_____/

-------------------------------------------------------------

              Have fun exploring FoundryVTT!

=============================================================
  `
  console.log(`${demoText}`);
});

// Remove settings to configure modules or exit to the setup screen.
Hooks.on("renderSettings", (app, html) => {
  html.find('button[data-action="setup"]').remove();
  html.find('button[data-action="modules"]').remove();
});

// Remove dialog links to return to the setup screen.
Hooks.on("renderMainMenu", (app, html, items) => {
  html.find('.menu-players').remove();
  html.find('.menu-world').remove();
});

// Remove the disable-admin module so that it can't be... disabled.
Hooks.on("renderModuleManagement", (app, html, options) => {
  html.find('li[data-module-name="disable-admin"]').remove();
});