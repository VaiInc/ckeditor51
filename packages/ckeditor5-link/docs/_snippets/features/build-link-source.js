/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals window */

import { AutoLink, LinkImage } from '@ckeditor/ckeditor5-link';
import { CKBox, CKBoxImageEdit } from '@ckeditor/ckeditor5-ckbox';
import { PictureEditing, ImageResize, AutoImage } from '@ckeditor/ckeditor5-image';
import { CS_CONFIG } from '@ckeditor/ckeditor5-cloud-services/tests/_utils/cloud-services-config';

// Umberto combines all `packages/*/docs` into the `docs/` directory. The import path must be valid after merging all directories.
import ClassicEditor from '../build-classic';

window.CKEditorPlugins = { AutoLink, PictureEditing, ImageResize, AutoImage, LinkImage, CKBox, CKBoxImageEdit };

window.ClassicEditor = ClassicEditor;
window.CS_CONFIG = CS_CONFIG;
