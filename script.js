/* Loading Screen Styles */
#loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #2c3e50, #3498db);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
}

.loader-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

.loader-block {
    width: 50px;
    height: 50px;
    background: rgba(255,255,255,0.2);
    animation: pulse 1.5s infinite alternate;
}

.loader-text {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.loader-text span {
    color: white;
    margin: 0 5px;
    opacity: 0;
    animation: textReveal 1s forwards;
}

@keyframes pulse {
    from { transform: scale(0.8); }
    to { transform: scale(1.2); }
}

@keyframes textReveal {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
}
