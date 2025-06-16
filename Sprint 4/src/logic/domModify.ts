export default function writeJoke (
    jokeOutput : HTMLDivElement, 
    pNode : HTMLParagraphElement, 
    jokeText : Text
) {
    jokeOutput.innerHTML = "";
    pNode.appendChild(jokeText);
    jokeOutput.appendChild(pNode);
}
