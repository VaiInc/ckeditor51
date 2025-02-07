/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals window */

import { ListProperties, DocumentList, DocumentListProperties, TodoDocumentList } from '@ckeditor/ckeditor5-list';
import { CKBox, CKBoxImageEdit } from '@ckeditor/ckeditor5-ckbox';
import { PictureEditing, ImageResize, AutoImage } from '@ckeditor/ckeditor5-image';
import { LinkImage } from '@ckeditor/ckeditor5-link';

// Umberto combines all `packages/*/docs` into the `docs/` directory. The import path must be valid after merging all directories.
import ClassicEditor from '../build-classic';

ClassicEditor.builtinPlugins.push( PictureEditing, ImageResize, AutoImage, LinkImage, CKBox, CKBoxImageEdit );

window.ClassicEditor = ClassicEditor;
window.ListProperties = ListProperties;
window.DocumentList = DocumentList;
window.DocumentListProperties = DocumentListProperties;
window.TodoDocumentList = TodoDocumentList;
window.ImageResize = ImageResize;
