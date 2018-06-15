const DragDropManager = Object.create(null, {
    init: {
      value: () => {
        const stages = document.querySelectorAll(".stage")
  
        stages.forEach(stage => {
          // Gain reference of item being dragged
          stage.ondragstart = e => {
              e.dataTransfer.setData("text", e.target.classList)
            } 
        })
        
        
        const targets = document.querySelectorAll(".target")
        
        targets.forEach(t => {
            // Dragover not supported by default. Turn that off.
            t.ondragover = e => e.preventDefault()
            
            t.ondrop = e => {
                // Enabled dropping on targets
                e.preventDefault()
                
                // Determine what's being dropped
                const messageFromStages = e.dataTransfer.getData("text")
                console.log(messageFromStages.split(" "));
            
            // Append card to target component as child
            if (t.children.length === 0) {
            e.target.appendChild(document.querySelector(`.${messageFromStages.split(" ")[1]}`))
            }  
            // TODO: This should only happen if the target has no children nodes
            // TODO: This should not happen if the target is another stage card
          }
        })
      }
    }
  })
  
  console.log(DragDropManager)
  DragDropManager.init()
  