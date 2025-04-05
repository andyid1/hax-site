import{HAXCMSLitElementTheme as t,css as e,html as i,autorun as o,toJS as r,store as a}from"@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";import"@haxtheweb/haxcms-elements/lib/ui-components/navigation/site-menu-button.js";import"@haxtheweb/haxcms-elements/lib/ui-components/site/site-title.js";import"@haxtheweb/haxcms-elements/lib/ui-components/active-item/site-active-title.js";
/**
 * Copyright 2025 btopro
 * @license Apache-2.0, see License.md for full text.
 */class n extends t{static get styles(){return[super.styles,e`
        :host {
          display: block;
          padding: var(--ddd-spacing-10) var(--ddd-spacing-20);
          max-width: 960px;
          min-width: 400px;
          margin: 0 auto;
          border: var(--ddd-border-lg);
          border-width: var(--ddd-spacing-5);
          border-radius: var(--ddd-radius-lg);
          border-color: light-dark(var(--joker-purple), var(--joker-green));
          background-color: light-dark(var(--ddd-theme-default-slateMaxLight
          ), var(--ddd-theme-default-coalyGray));
          color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-slateMaxLight));
        }

        .wrapper {
          border-radius: var(--ddd-radius-lg);
        }

        site-title {
          font-size: var(--ddd-font-size-l);
        }

        header {
          display: flex;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        ul li {
          display: inline-block;
          margin: 0;
          padding: 0;
          list-style-type: none;
          vertical-align: top;
        }
        ul li a {
          display: block;
        }
        button {
          height: 32px;
          width: 32px;
          margin: 0;
          padding: 0;
          font-size: var(--ddd-font-size-sm);
          cursor: pointer;
        }

        .active button {
          background-color: light-dark(var(--joker-purple), var(--joker-green));
          color: light-dark(var(--joker-green), var(--joker-purple));
          font-weight: bold;
        }

        site-menu-button {
          display: inline-block;
          vertical-align: top;
        }
        simple-icon-button {
          margin-left: var(--ddd-spacing-10);
        }
      `]}HAXCMSGlobalStyleSheetContent(){return[...super.HAXCMSGlobalStyleSheetContent(),e`
      :root {
        --joker-purple: var(--ddd-theme-default-wonderPurple);
        --joker-green: var(--ddd-theme-default-opportunityGreen);
      }
      body {
        padding: 0;
        margin: 0;
        background-color: var(--joker-green);
        background-position: 0% 0%;
        background-attachment: absolute;
        background-size: contain;
        background-image: none;
        background-blend-mode: overlay;
      }
      body.lightning {
        background-image: url('./assets/lightning.gif');
      }
      body.dark-mode {
        background-color: var(--joker-purple);
      }
      `]}static get properties(){return{...super.properties,activeId:{type:String},_items:{type:Array}}}toggleBodyLightning(){globalThis.document.body.classList.toggle("lightning")}render(){return i`
    <div class="wrapper">
    <header>
      <ul>
        <li>
          <site-menu-button
            type="prev"
            position="top"
          ></site-menu-button>
        </li>
    ${this._items.map((t,e)=>i`
        <li class="${t.id===this.activeId?"active":""}">
          <a href="${t.slug}"><button title="${t.title}">${e+1}</button></a>
        </li>
      `)}
        <li>
          <site-menu-button
            type="next"
            position="top"
          ></site-menu-button>
        </li>
      </ul>
      <simple-icon-button icon="hax:wand" @click="${this.toggleBodyLightning}" title="Toggle Lightning Bolts"></simple-icon-button>
    </header>
    <main>
      <site-active-title></site-active-title>
      <article>
        <!-- this block and names are required for HAX to edit the content of the page. contentcontainer, slot, and wrapping the slot. -->
        <div id="contentcontainer"><div id="slot"><slot></slot></div></div>
      </article>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
    `}static get tag(){return"custom-custom-btopro-theme"}constructor(){super(),this._items=[],this.activeId=null,o(()=>{this.activeId=r(a.activeId),this._items=r(a.manifest.items)})}}customElements.define(n.tag,n);
