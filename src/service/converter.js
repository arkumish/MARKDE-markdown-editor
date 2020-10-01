import marked from 'marked';

const render_tasklist = function (str) {  // Checked task-list box match
    str = str.toString();
    
    if (str.match(/<li><input.*<\/li>/gi)) {
        str = str.replace(/(<li>)(<input.*<\/li>)/gi,
          `<li style="list-style-type: none;">$2`);
      }
    return str
  }

const markdown_convertor = (inputValue, gfmMode)=>{

    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: gfmMode,
    });
console.log(inputValue);
    if(gfmMode)
    return render_tasklist(marked(inputValue));
    else
    return marked(inputValue);

}

export default markdown_convertor;