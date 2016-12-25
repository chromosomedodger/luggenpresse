//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bTrump\b/g, "God Emperor Donald Trump");
	v = v.replace(/\bKurt Eichenwald\b/g, "Seizure-Having Jew Kurt Kikenwald");
	v = v.replace(/\bBread\b/g, "Caaaaarbs");
	v = v.replace(/\bScones\b/g, "Caaaaarbs");
	v = v.replace(/\bBuns\b/g, "Caaaaarbs");
	v = v.replace(/\bspaghetti\b/g, "caaaaarbs");
	
	textNode.nodeValue = v;
}
