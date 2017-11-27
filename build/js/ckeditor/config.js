/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';

    config.extraPlugins = 'imagebrowser';
    config.extraPlugins = 'colorbutton';
    config.colorButton_enableAutomatic = true;

    // So my bet is for allowing any class in the editor is:
    config.allowedContent = true;
    config.extraAllowedContent = '*(*);*{*}';
    config.entities = false;


    config.toolbar = [
        { name: 'clipboard', items: [ 'Cut', 'Copy', 'Past', 'PastFrom', 'PastWord', '-', 'Undo', 'Redo' ] },

        { name: 'editing', items: [ 'Scayt' ] },

        { name: 'links', items: [ 'Link', 'Unlink', 'Anchor'] },

        { name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule', 'SpecialChar' ] },

        { name: 'tools', items: [ 'Maximize'] },

        { name: 'document', items: [ 'Source' ] },

        { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Stroke', '-', 'RemoveFormat'] },

        { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockqoute'] },
        { name: 'styles', items: [ 'Styles', 'Format', 'Colors'] },
        { name: 'colors'},
        { name: 'about', items: [ 'About'] },

    ];
};

