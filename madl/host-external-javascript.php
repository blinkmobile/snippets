/**
 * This is suitable for hosting files for use in the externalJavaScript setting.
 * If you change the Content-Type line as appropriate, you could host CSS or XML
 * or any other kind of content.
 *
 * For best results, only access this Interaction via:
 *
 *     /_api/interaction/run/ANSWERSPACE/INTERACTION/?
 *
 * swapping ANSWERSPACE and INTERACTION as appropriate, where this Interaction is
 * a MADL Interaction with display=hide.
 */

/**
 * It may be more suitable to use an Asset CDN (via the Asset Manager).
 */

header('Content-Type: application/javascript');

return <<< 'EOF'
  /* make sure the above EOF is in single-quotes */


  /* TODO: put your JavaScript code here, with NO <script></script> tags */


  /* make sure this last EOF is on a line all by itself with no spaces */
EOF;

/* it might help to make sure there is an empty line at the end */

