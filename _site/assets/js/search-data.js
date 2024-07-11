var store = [{
        "title": "Test_C",
        "excerpt":"I’m studying about the usage of the markdown language for posting. A few things to check for: Non-breaking text in the title should have no adverse effects on layout or functionality. Check the browser window / tab title.The following CSS property will help you support non-breaking text. word-wrap: break-word;import numpy...","categories": ["Edge Case"],
        "tags": ["content","css","edge case","html","layout","title"],
        "url": "http://localhost:4000/edge%20case/edge-case-title-should-not-overflow-the-content-area/"
      },{
        "title": "Test_B",
        "excerpt":"  Only one thing is impossible for God: To find any sense in any copyright law on the planet.   Mark Twain ","categories": ["Post Formats"],
        "tags": ["Post Formats","quote"],
        "url": "http://localhost:4000/post%20formats/post-quote/"
      },{
        "title": "Layout: Excerpt (Defined)",
        "excerpt":"This is the start of the post content. This paragraph should be absent from an index page where post.excerpt is shown. ","categories": ["Layout","Uncategorized"],
        "tags": ["content","excerpt","layout"],
        "url": "http://localhost:4000/layout/uncategorized/layout-excerpt-defined/"
      },{
        "title": "Layout: Excerpt (Generated with Separator Tag)",
        "excerpt":"This is the post content. Archive-index pages should display an auto-generated excerpt of all the content preceding the excerpt_separator, as defined in the YAML Front Matter or globally in _config.yml. Be sure to test the formatting of the auto-generated excerpt, to ensure that it doesn’t create any layout problems. Lorem...","categories": ["Layout","Uncategorized"],
        "tags": ["content","excerpt","layout"],
        "url": "http://localhost:4000/layout/uncategorized/layout-excerpt-generated/"
      },{
        "title": "Layout: Hero Image",
        "excerpt":"This post should display a large hero image at the top of a page. This post tests a horizontal image using the following YAML Front Matter: image: path: /images/eder-oliveira-180877.jpgHero images can also be assigned more succinctly when thumbnail or caption are not used. image: /images/eder-oliveira-180877.jpgTall images will push content down...","categories": ["Layout"],
        "tags": ["content","image","layout"],
        "url": "http://localhost:4000/layout/layout-hero-image/"
      },{
        "title": "Markup: Text Readability Test",
        "excerpt":"Portland in shoreditch Vice, labore typewriter pariatur hoodie fap sartorial Austin. Pinterest literally occupy Schlitz forage. Odio ad blue bottle vinyl, 90’s narwhal commodo bitters pour-over nostrud. Ugh est hashtag in, fingerstache adipisicing laboris esse Pinterest shabby chic Portland. Shoreditch bicycle rights anim, flexitarian laboris put a bird on it...","categories": [],
        "tags": ["sample post","readability","test"],
        "url": "http://localhost:4000/markup-text-readability/"
      },{
        "title": "Markup: Title *with* **Markdown**",
        "excerpt":"Using Markdown in the title should have no adverse effect on the layout or functionality. page.title example: title: \"Markup: Title *with* **Markdown**\"\"","categories": ["Markdown"],
        "tags": ["css","html","title"],
        "url": "http://localhost:4000/markdown/markup-title-with-markdown/"
      },{
        "title": "Markup: Title with Special&nbsp;---&nbsp;Characters",
        "excerpt":"Putting special characters in the title should have no adverse effect on the layout or functionality. The title above has none-breaking spaces before and after the m-dash. &amp;nbsp;---&amp;nbsp;Latin Character Tests This is a test to see if the fonts used in this theme support basic Latin characters. ! &#8220; #...","categories": ["Markup"],
        "tags": ["html","markup","post","title"],
        "url": "http://localhost:4000/markup/markup-title-with-special-characters/"
      },{
        "title": "Markup: Text Alignment and Transformations",
        "excerpt":"Sample text to demonstrate alignment and transformation classes. Easily realign text with alignment classes via HTML: &lt;p class=\"text-left\"&gt;Left aligned text.&lt;/p&gt;&lt;p class=\"text-center\"&gt;Center aligned text.&lt;/p&gt;&lt;p class=\"text-right\"&gt;Right aligned text.&lt;/p&gt;&lt;p class=\"text-justify\"&gt;Justified text.&lt;/p&gt;&lt;p class=\"text-nowrap\"&gt;No wrap text.&lt;/p&gt;Or with Kramdown and inline attribute lists: Left aligned text.{: .text-left}Center aligned text.{: .text-center}Right aligned text.{: .text-right}Justified text.{: .text-justify}No wrap...","categories": ["Markup"],
        "tags": ["alignment","content","css","markup"],
        "url": "http://localhost:4000/markup/markup-text-alignment/"
      },{
        "title": "Markup: Image Alignment",
        "excerpt":"The best way to demonstrate the ebb and flow of the various image positioning options is to nestle them snuggly among an ocean of words. Grab a paddle and let’s get started. Assign classes with HTML: &lt;img src=\"image.jpg\" class=\"align-left\" alt=\"\"&gt;&lt;img src=\"image.jpg\" class=\"align-center\" alt=\"\"&gt;&lt;img src=\"image.jpg\" class=\"align-right\" alt=\"\"&gt;Or use Kramdown and inline...","categories": ["Markup"],
        "tags": ["alignment","captions","content","css","image","markup"],
        "url": "http://localhost:4000/markup/markup-image-alignment/"
      },{
        "title": "Markup: HTML Elements and Formatting",
        "excerpt":"A variety of common HTML elements to demonstrate the theme’s stylesheet and verify they have been styled appropriately. Header one Header two Header three Header four Header five Header six Blockquotes Single line blockquote: Stay hungry. Stay foolish. Multi line blockquote with a cite reference: People think focus means saying...","categories": ["Markup"],
        "tags": [],
        "url": "http://localhost:4000/markup/markup-html-elements-and-formatting/"
      },{
        "title": "Test_A",
        "excerpt":"Syntax highlighting is a feature that displays source code, in different colors and fonts according to the category of terms. This feature facilitates writing in a structured language such as a programming language or a markup language as both structures and syntax errors are visually distinct. Highlighting does not affect...","categories": [],
        "tags": ["code","syntax highlighting"],
        "url": "http://localhost:4000/markup-syntax-highlighting/"
      },{
        "title": "MathJax Example",
        "excerpt":"MathJax is a simple, yet powerful, way ofincluding Tex/LaTex/MathML based mathematics in HTML webpages. Usage To enable MathJax support configure your _config.xml to: Set kramdown as the Markdown parser. Enable MathJax.The version of MathJax enabled is v3. An example setting for _config.xml is shown below: markdown: kramdownmathjax: enable: true combo:...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mathjax-example/"
      },{
        "title": "Hidden Post",
        "excerpt":"This post has YAML Front Matter of hidden: true and should not appear in paginator.posts. ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/hidden-post/"
      }]
