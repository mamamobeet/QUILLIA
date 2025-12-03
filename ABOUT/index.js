document.addEventListener("DOMContentLoaded", () => {
  const hoverElements = [
    ".aboutus-container",
    ".aboutus-image",
    ".team-member",
    ".vmgo-vision-strip",
    ".vmgo-mission-strip",
    ".vmgo-goals-strip",
    ".vmgo-obj-strip",
    ".gmap-container",
    
  ]
  hoverElements.forEach((selector) => {
        const elements = document.querySelectorAll(selector)

        elements.forEach((element) => {
          // Mouse enter - lift up and expand shadow
          element.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-15px)"
            this.style.boxShadow = getEnlargedShadow(this)
          })

          // Mouse leave - return to original state
          element.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0)"
            this.style.boxShadow = getOriginalShadow(this)
          })
        })
      })

      // Function to get enlarged shadow based on current element
      function getEnlargedShadow(element) {
        const elementId = element.id
        
        // Check against the VMGO IDs first, as they have specific shadows
        if (elementId === "vmgo-vision") {
          return "0 25px 50px rgba(0, 0, 0, 0.5), inset -8px -8px 20px rgba(0, 0, 0, 0.15), inset 8px 8px 15px rgba(255, 255, 255, 0.3)"
        } else if (elementId === "vmgo-mission") {
          return "-10px 20px 40px rgba(0, 0, 0, 0.5), inset 0 -20px 30px rgba(0, 0, 0, 0.2)"
        } else if (elementId === "vmgo-goals" || elementId === "vmgo-objectives") {
          return "0 15px 40px rgba(0, 0, 0, 0.4)";
        }
        
        // Then check against other classes
        if (element.classList.contains("gmap-container")) {
          return "0 20px 40px rgba(0, 0, 0, 0.4)"
        } else {
          // Default shadow for generic elements like .aboutus-strip, .aboutus-image, .team-member
          return "0 15px 40px rgba(0, 0, 0, 0.4)"
        }
      }

      // Function to get original shadow based on current element
      function getOriginalShadow(element) {
        const elementId = element.id
        
        // Check against the VMGO IDs
        if (elementId === "vmgo-vision") {
          return "0 15px 35px rgba(0, 0, 0, 0.4), inset 0 -30px 40px rgba(0, 0, 0, 0.25)"
        } else if (elementId === "vmgo-mission") {
          return "-5px 5px 15px rgba(0, 0, 0, 0.3), inset 0 -20px 30px rgba(0, 0, 0, 0.2)"
        } else if (elementId === "vmgo-goals" || elementId === "vmgo-objectives") {
          // Revert to the default vmgo-info-card shadow
          return "0 10px 20px rgba(0, 0, 0, 0.5)"; 
        }
        
        // Then check against other classes
        if (element.classList.contains("gmap-container")) {
          // Revert to the default gmap-container shadow
          return "0 10px 20px rgba(0, 0, 0, 0.3)"
        } else if (element.classList.contains("aboutus-strip") || element.classList.contains("vmgo-strip") || element.classList.contains("meet-strip") || element.classList.contains("gmap-strip")) {
          // Revert main strips to their defined CSS shadow
          return "-5px 5px 15px rgba(0, 0, 0, 0.3)";
        } else if (element.classList.contains("team-member") || element.classList.contains("aboutus-image")) {
          // Default original shadow for .team-member, .aboutus-image, etc.
          return "0 5px 15px rgba(0, 0, 0, 0.2)"
        }
        
        // Fallback return if nothing matches, should rarely happen.
        return ""; 
      }
    })
