// Fashion color wheel with spinning animation
const luckyPhrases = [
    'Lucky you!',
    'Looks like it\'s your lucky day!',
    'You\'re in luck indeed!',
    'Fortune smiles upon you!',
    'What a lucky spin!',
    'Today is your lucky day!',
    'How fortunate!',
    'You\'ve got the luck!'
];

// Function to get a random lucky phrase
function getLuckyPhrase() {
    return luckyPhrases[Math.floor(Math.random() * luckyPhrases.length)];
}

const colors = [
    { name: 'Cloud Dancer', hex: '#F2F3F1', message: 'Elegant and serene! This soft hue brings tranquility and sophistication to your style.', combinations: [
        { colors: ['#F2F3F1', '#3F3B40'], name: 'Cloud & Silhouette', description: 'Timeless elegance' },
        { colors: ['#F2F3F1', '#7F9A8D'], name: 'Cloud & Eucalyptus', description: 'Fresh and natural' },
        { colors: ['#F2F3F1', '#D81E78'], name: 'Cloud & Fuchsia', description: 'Soft and bold contrast' }
    ]},
    { name: 'Warm Eucalyptus', hex: '#7F9A8D', message: 'Nature-inspired and calming. This sage green brings balance and harmony to your look.', combinations: [
        { colors: ['#7F9A8D', '#F2F3F1'], name: 'Eucalyptus & Cloud', description: 'Fresh and natural' },
        { colors: ['#7F9A8D', '#6B3A2E'], name: 'Eucalyptus & Mahogany', description: 'Earthy and grounded' },
        { colors: ['#7F9A8D', '#7EE0C3'], name: 'Eucalyptus & Mint', description: 'Harmonious greens' }
    ]},
    { name: 'Warm Mahogany', hex: '#6B3A2E', message: 'Rich and grounded! This warm brown brings depth and sophistication to your style.', combinations: [
        { colors: ['#6B3A2E', '#F2F3F1'], name: 'Mahogany & Cloud', description: 'Warm and elegant' },
        { colors: ['#6B3A2E', '#7F9A8D'], name: 'Mahogany & Eucalyptus', description: 'Earthy and natural' },
        { colors: ['#6B3A2E', '#C98A3A'], name: 'Mahogany & Amber', description: 'Rich warmth' }
    ]},
    { name: 'Silhouette', hex: '#3F3B40', message: 'Sophisticated and timeless. This deep charcoal brings elegance and versatility to your wardrobe.', combinations: [
        { colors: ['#3F3B40', '#F2F3F1'], name: 'Silhouette & Cloud', description: 'Classic contrast' },
        { colors: ['#3F3B40', '#D81E78'], name: 'Silhouette & Fuchsia', description: 'Bold and dramatic' },
        { colors: ['#3F3B40', '#6F8FD9'], name: 'Silhouette & Blue Aura', description: 'Modern elegance' }
    ]},
    { name: 'Teal', hex: '#1F6F78', message: 'Deep and transformative! This teal brings creativity and confidence to your style.', combinations: [
        { colors: ['#1F6F78', '#F2F3F1'], name: 'Teal & Cloud', description: 'Fresh and crisp' },
        { colors: ['#1F6F78', '#7EE0C3'], name: 'Teal & Mint', description: 'Ocean harmony' },
        { colors: ['#1F6F78', '#C98A3A'], name: 'Teal & Amber', description: 'Vibrant contrast' }
    ]},
    { name: 'Electric Fuchsia', hex: '#D81E78', message: 'Bold and vibrant! This electric pink brings energy and confidence to your look.', combinations: [
        { colors: ['#D81E78', '#F2F3F1'], name: 'Fuchsia & Cloud', description: 'Bold and soft' },
        { colors: ['#D81E78', '#3F3B40'], name: 'Fuchsia & Silhouette', description: 'Dramatic contrast' },
        { colors: ['#D81E78', '#6F8FD9'], name: 'Fuchsia & Blue Aura', description: 'Vibrant energy' }
    ]},
    { name: 'Blue Aura', hex: '#6F8FD9', message: 'Calm and confident! This serene blue brings tranquility and sophistication to your style.', combinations: [
        { colors: ['#6F8FD9', '#F2F3F1'], name: 'Blue Aura & Cloud', description: 'Fresh and calm' },
        { colors: ['#6F8FD9', '#D81E78'], name: 'Blue Aura & Fuchsia', description: 'Energetic contrast' },
        { colors: ['#6F8FD9', '#7EE0C3'], name: 'Blue Aura & Mint', description: 'Cool harmony' }
    ]},
    { name: 'Amber Haze', hex: '#C98A3A', message: 'Warm and inviting! This golden amber brings optimism and radiance to your wardrobe.', combinations: [
        { colors: ['#C98A3A', '#3F3B40'], name: 'Amber & Silhouette', description: 'Rich contrast' },
        { colors: ['#C98A3A', '#1F6F78'], name: 'Amber & Teal', description: 'Vibrant energy' },
        { colors: ['#C98A3A', '#6B3A2E'], name: 'Amber & Mahogany', description: 'Warm earth tones' }
    ]},
    { name: 'Jelly Mint', hex: '#7EE0C3', message: 'Fresh and playful! This mint green brings lightness and joy to your style.', combinations: [
        { colors: ['#7EE0C3', '#3F3B40'], name: 'Mint & Silhouette', description: 'Fresh contrast' },
        { colors: ['#7EE0C3', '#1F6F78'], name: 'Mint & Teal', description: 'Ocean breeze' },
        { colors: ['#7EE0C3', '#7F9A8D'], name: 'Mint & Eucalyptus', description: 'Natural harmony' }
    ]}
];

let canvas, ctx;
let currentAngle = 0;
let isSpinning = false;
let animationFrameId = null;
let shouldStop = false;
let wasStoppedManually = false;
const centerX = 250;
const centerY = 250;
const radius = 200;
let wheelRotation = 0;
let targetRotation = 0;
let startRotation = 0;

// Initialize the wheel
function initWheel() {
    canvas = document.getElementById('colorWheel');
    ctx = canvas.getContext('2d');
    
    // Make canvas responsive
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    drawWheel();
    setupEventListeners();
}

// Make canvas responsive while maintaining aspect ratio
function resizeCanvas() {
    const maxSize = Math.min(window.innerWidth - 40, 500); // 40px for padding
    
    if (maxSize < 500) {
        canvas.style.width = maxSize + 'px';
        canvas.style.height = maxSize + 'px';
    } else {
        canvas.style.width = '500px';
        canvas.style.height = '500px';
    }
    
    // Redraw wheel after resize
    if (ctx) {
        drawWheel();
    }
}

// Draw the color wheel
function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const segmentAngle = (2 * Math.PI) / colors.length;
    
    // Save context for rotation
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(wheelRotation);
    ctx.translate(-centerX, -centerY);
    
    // Draw segments - each color gets its own wedge with dedicated text
    colors.forEach((color, index) => {
        const startAngle = index * segmentAngle - Math.PI / 2;
        const endAngle = (index + 1) * segmentAngle - Math.PI / 2;
        
        // Draw segment for this color
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = color.hex;
        ctx.fill();
        
        // Draw border
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Draw dedicated text label for this color wedge - rotated along the arc
        ctx.save();
        ctx.translate(centerX, centerY);
        
        // Calculate mid-angle of the slice
        const midAngle = startAngle + segmentAngle / 2;
        
        // Convert mid-angle to degrees (0-360°) for checking text orientation
        // Normalize to 0-360 range
        let midAngleDegrees = (midAngle * 180 / Math.PI);
        while (midAngleDegrees < 0) midAngleDegrees += 360;
        while (midAngleDegrees >= 360) midAngleDegrees -= 360;
        
        // Determine text rotation angle
        // Rotate text to match slice angle, but flip 180° if text would be upside down
        // Text is upside down when angle is between 90° and 270°
        let textRotationAngle = midAngle;
        if (midAngleDegrees > 90 && midAngleDegrees < 270) {
            textRotationAngle = midAngle + Math.PI; // Add 180° to flip text
        }
        
        // Apply rotation to match slice angle (with flip if needed)
        ctx.rotate(textRotationAngle);
        
        // Text color - white for all segments (as shown in image)
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 15px "Canva Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Add text shadow for better readability
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        
        // Place text at 65% radius from center (following the arc)
        // When flipped (180° rotation added), use negative radius to keep text in correct position
        const textRadius = radius * 0.65;
        const textX = (midAngleDegrees > 90 && midAngleDegrees < 270) ? -textRadius : textRadius;
        ctx.fillText(color.name, textX, 0);
        
        // Reset shadow
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        
        ctx.restore();
    });
    
    ctx.restore();
    
    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 60, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Setup event listeners
function setupEventListeners() {
    const spinButton = document.getElementById('spinButton');
    const resultModal = document.getElementById('resultModal');
    const learnMoreModal = document.getElementById('learnMoreModal');
    const closeButtons = document.querySelectorAll('.close, .close-learn-more');
    const learnMoreButton = document.getElementById('learnMoreButton');
    
    spinButton.addEventListener('click', function() {
        if (isSpinning) {
            stopWheel();
        } else {
            spinWheel();
        }
    });
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            resultModal.classList.remove('show');
            learnMoreModal.classList.remove('show');
        });
    });
    
    // Close modal when clicking outside
    resultModal.addEventListener('click', (e) => {
        if (e.target === resultModal) {
            resultModal.classList.remove('show');
        }
    });
    
    learnMoreModal.addEventListener('click', (e) => {
        if (e.target === learnMoreModal) {
            learnMoreModal.classList.remove('show');
        }
    });
    
    learnMoreButton.addEventListener('click', () => {
        resultModal.classList.remove('show');
        showLearnMoreModal();
    });
}

// Spin the wheel
function spinWheel() {
    if (isSpinning) return;
    
    isSpinning = true;
    shouldStop = false;
    wasStoppedManually = false;
    const spinButton = document.getElementById('spinButton');
    const buttonText = spinButton.querySelector('.button-text');
    buttonText.textContent = 'STOP';
    spinButton.classList.add('stop-mode');
    
    // Random rotation (5-10 full rotations + random angle)
    const spins = 5 + Math.random() * 5;
    const randomAngle = Math.random() * 2 * Math.PI;
    targetRotation = spins * 2 * Math.PI + randomAngle;
    startRotation = wheelRotation;
    
    // Animate the spin
    const duration = 3000; // 3 seconds
    const startTime = performance.now();
    
    function animate(currentTime) {
        if (shouldStop) {
            // Stop animation immediately
            wasStoppedManually = true;
            finishSpin();
            return;
        }
        
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        wheelRotation = startRotation + targetRotation * easeOut;
        drawWheel();
        
        if (progress < 1 && !shouldStop) {
            animationFrameId = requestAnimationFrame(animate);
        } else {
            // Animation complete naturally
            finishSpin();
        }
    }
    
    animationFrameId = requestAnimationFrame(animate);
}

// Stop the wheel
function stopWheel() {
    if (!isSpinning) return;
    shouldStop = true;
}

// Finish the spin and show result
function finishSpin() {
    const spinButton = document.getElementById('spinButton');
    const buttonText = spinButton.querySelector('.button-text');
    
    // If stopped manually, do a quick deceleration
    if (wasStoppedManually) {
        const currentRotation = wheelRotation;
        const decelDuration = 400; // 0.4 seconds deceleration
        const decelStartTime = performance.now();
        
        function decelerate(decelCurrentTime) {
            const elapsed = decelCurrentTime - decelStartTime;
            const progress = Math.min(elapsed / decelDuration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            // Add a small additional rotation that decelerates
            const additionalRotation = (targetRotation * 0.2) * (1 - easeOut);
            wheelRotation = currentRotation + additionalRotation;
            drawWheel();
            
            if (progress < 1) {
                requestAnimationFrame(decelerate);
            } else {
                completeSpin();
            }
        }
        
        requestAnimationFrame(decelerate);
    } else {
        completeSpin();
    }
}

// Complete the spin and show result
function completeSpin() {
    isSpinning = false;
    shouldStop = false;
    wasStoppedManually = false;
    const spinButton = document.getElementById('spinButton');
    const buttonText = spinButton.querySelector('.button-text');
    buttonText.textContent = 'SPIN';
    spinButton.classList.remove('stop-mode');
    
    // Determine which color is selected (pointer is at top)
    const segmentAngle = (2 * Math.PI) / colors.length;
    const normalizedAngle = (2 * Math.PI - (wheelRotation % (2 * Math.PI))) % (2 * Math.PI);
    const selectedIndex = Math.floor(normalizedAngle / segmentAngle) % colors.length;
    
    showResult(colors[selectedIndex]);
}

// Show result modal
function showResult(color) {
    const modal = document.getElementById('resultModal');
    const colorPreview = document.getElementById('colorPreview');
    const colorName = document.getElementById('colorName');
    const colorMessage = document.getElementById('colorMessage');
    
    colorPreview.style.backgroundColor = color.hex;
    colorName.textContent = color.name;
    colorName.style.color = color.hex;
    
    // Add lucky phrase to the message
    const luckyPhrase = getLuckyPhrase();
    colorMessage.textContent = `${luckyPhrase} ${color.message}`;
    
    // Store selected color for learn more modal
    modal.dataset.selectedColor = JSON.stringify(color);
    
    setTimeout(() => {
        modal.classList.add('show');
    }, 500);
}

// Show learn more modal with color combinations
function showLearnMoreModal() {
    const resultModal = document.getElementById('resultModal');
    const learnMoreModal = document.getElementById('learnMoreModal');
    const colorCombinations = document.getElementById('colorCombinations');
    const selectedColor = JSON.parse(resultModal.dataset.selectedColor);
    
    colorCombinations.innerHTML = '';
    
    selectedColor.combinations.forEach(combo => {
        const comboDiv = document.createElement('div');
        comboDiv.className = 'color-combination';
        
        const swatchesContainer = document.createElement('div');
        swatchesContainer.className = 'combination-swatches';
        
        const swatch1 = document.createElement('div');
        swatch1.className = 'combination-swatch swatch-base fabric-texture';
        swatch1.style.backgroundColor = combo.colors[0];
        
        const swatch2 = document.createElement('div');
        swatch2.className = 'combination-swatch swatch-overlay fabric-texture';
        swatch2.style.backgroundColor = combo.colors[1];
        
        swatchesContainer.appendChild(swatch1);
        swatchesContainer.appendChild(swatch2);
        
        const nameDiv = document.createElement('div');
        nameDiv.className = 'combination-name';
        nameDiv.textContent = combo.name;
        
        const descDiv = document.createElement('div');
        descDiv.className = 'combination-description';
        descDiv.textContent = combo.description;
        
        comboDiv.appendChild(swatchesContainer);
        comboDiv.appendChild(nameDiv);
        comboDiv.appendChild(descDiv);
        colorCombinations.appendChild(comboDiv);
    });
    
    learnMoreModal.classList.add('show');
}

// Email form handler - always submit via fetch to avoid page redirect (fixes 404 on Netlify)
function setupEmailForm() {
    const form = document.getElementById('paletteEmailForm');
    const successMsg = document.getElementById('emailSuccessMessage');
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // On localhost, just show success (Netlify won't receive it)
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            form.style.display = 'none';
            successMsg.style.display = 'block';
            return;
        }

        // On Netlify: submit via fetch so we never navigate away
        try {
            const formData = new FormData(form);
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });

            form.style.display = 'none';
            successMsg.style.display = 'block';
        } catch (err) {
            successMsg.textContent = 'Something went wrong. Please try again.';
            successMsg.style.display = 'block';
        }
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initWheel();
    setupEmailForm();
});


