// Hook into Foundry's initialization
Hooks.once('init', function() {
    // Extend the default D&D 5E character sheet
    class Custom5eCharacterSheet extends ActorSheet5eCharacter {
  
      /** @override */
      activateListeners(html) {
        // Call the base class's activateListeners
        super.activateListeners(html);
  
        // Target the inventory section (before `.items-list`)
        const inventoryHeader = html.find('.items-header');
        
        // Add a custom button above the inventory section
        inventoryHeader.before('<button class="custom-button">Custom Action</button>');
  
        // Add an event listener for the custom button
        html.find('.custom-button').click(this._onCustomButtonClick.bind(this));
      }
  
      _onCustomButtonClick(event) {
        event.preventDefault();
        console.log('Custom button clicked!');
        ui.notifications.info("You clicked the custom button!");
      }
    }
  
    // Register the modified sheet
    Actors.registerSheet("dnd5e", Custom5eCharacterSheet, {
      types: ["character"],
      makeDefault: true
    });
  });
  