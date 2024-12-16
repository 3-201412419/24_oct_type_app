const chokidar = require('chokidar');
const { exec } = require('child_process');
const path = require('path');

// Initialize watcher
const watcher = chokidar.watch('.', {
    ignored: [
        /(^|[\/\\])\../, // ignore dotfiles
        /node_modules/,
        /.git/,
        /auto-commit.js/
    ],
    persistent: true
});

// Function to execute git commands
function executeGitCommands() {
    // 먼저 변경사항이 있는지 확인
    exec('git status --porcelain', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error checking git status: ${error}`);
            return;
        }

        // 변경사항이 없으면 종료
        if (!stdout.trim()) {
            console.log('No changes to commit');
            return;
        }

        // 변경사항이 있을 때만 커밋 진행
        exec('git add .', (error) => {
            if (error) {
                console.error(`Error staging files: ${error}`);
                return;
            }
            
            const commitMessage = `Auto commit: ${new Date().toISOString()}`;
            exec(`git commit -m "${commitMessage}"`, (error) => {
                if (error) {
                    console.error(`Error committing: ${error}`);
                    return;
                }
                
                exec('git push', (error) => {
                    if (error) {
                        console.error(`Error pushing: ${error}`);
                        return;
                    }
                    console.log('Changes committed and pushed successfully!');
                });
            });
        });
    });
}

// Add event listeners
let timeout;
watcher
    .on('change', (filePath) => {
        console.log(`File ${filePath} has been changed`);
        // Clear existing timeout
        if (timeout) {
            clearTimeout(timeout);
        }
        // Set new timeout
        timeout = setTimeout(executeGitCommands, 60000); // Wait 1 second after last change
    })
    .on('ready', () => console.log('Initial scan complete. Ready for changes...'));

console.log('Watching for file changes...');
