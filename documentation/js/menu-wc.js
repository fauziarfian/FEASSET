'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">latihan-nestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminPenggunaModule.html" data-type="entity-link" >AdminPenggunaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AdminPenggunaModule-5843600216f6273d388067b8c323c79803b94155789ce46479d811e5bf930bf0847082ce8289190aaedd434f67193a39c49a73d3454fa72cff8243fef9a61262"' : 'data-bs-target="#xs-controllers-links-module-AdminPenggunaModule-5843600216f6273d388067b8c323c79803b94155789ce46479d811e5bf930bf0847082ce8289190aaedd434f67193a39c49a73d3454fa72cff8243fef9a61262"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdminPenggunaModule-5843600216f6273d388067b8c323c79803b94155789ce46479d811e5bf930bf0847082ce8289190aaedd434f67193a39c49a73d3454fa72cff8243fef9a61262"' :
                                            'id="xs-controllers-links-module-AdminPenggunaModule-5843600216f6273d388067b8c323c79803b94155789ce46479d811e5bf930bf0847082ce8289190aaedd434f67193a39c49a73d3454fa72cff8243fef9a61262"' }>
                                            <li class="link">
                                                <a href="controllers/AdminPenggunaController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminPenggunaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminPenggunaModule-5843600216f6273d388067b8c323c79803b94155789ce46479d811e5bf930bf0847082ce8289190aaedd434f67193a39c49a73d3454fa72cff8243fef9a61262"' : 'data-bs-target="#xs-injectables-links-module-AdminPenggunaModule-5843600216f6273d388067b8c323c79803b94155789ce46479d811e5bf930bf0847082ce8289190aaedd434f67193a39c49a73d3454fa72cff8243fef9a61262"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminPenggunaModule-5843600216f6273d388067b8c323c79803b94155789ce46479d811e5bf930bf0847082ce8289190aaedd434f67193a39c49a73d3454fa72cff8243fef9a61262"' :
                                        'id="xs-injectables-links-module-AdminPenggunaModule-5843600216f6273d388067b8c323c79803b94155789ce46479d811e5bf930bf0847082ce8289190aaedd434f67193a39c49a73d3454fa72cff8243fef9a61262"' }>
                                        <li class="link">
                                            <a href="injectables/AdminPenggunaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminPenggunaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-8419172d5e24b57430cbeafd4d7696429f1a2fa8eb26b6a18f5d15f8e84282f997658272261c9195ab0665b051d53077113f5bd73827a25e7c6774d37f41d25d"' : 'data-bs-target="#xs-controllers-links-module-AppModule-8419172d5e24b57430cbeafd4d7696429f1a2fa8eb26b6a18f5d15f8e84282f997658272261c9195ab0665b051d53077113f5bd73827a25e7c6774d37f41d25d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-8419172d5e24b57430cbeafd4d7696429f1a2fa8eb26b6a18f5d15f8e84282f997658272261c9195ab0665b051d53077113f5bd73827a25e7c6774d37f41d25d"' :
                                            'id="xs-controllers-links-module-AppModule-8419172d5e24b57430cbeafd4d7696429f1a2fa8eb26b6a18f5d15f8e84282f997658272261c9195ab0665b051d53077113f5bd73827a25e7c6774d37f41d25d"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-8419172d5e24b57430cbeafd4d7696429f1a2fa8eb26b6a18f5d15f8e84282f997658272261c9195ab0665b051d53077113f5bd73827a25e7c6774d37f41d25d"' : 'data-bs-target="#xs-injectables-links-module-AppModule-8419172d5e24b57430cbeafd4d7696429f1a2fa8eb26b6a18f5d15f8e84282f997658272261c9195ab0665b051d53077113f5bd73827a25e7c6774d37f41d25d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-8419172d5e24b57430cbeafd4d7696429f1a2fa8eb26b6a18f5d15f8e84282f997658272261c9195ab0665b051d53077113f5bd73827a25e7c6774d37f41d25d"' :
                                        'id="xs-injectables-links-module-AppModule-8419172d5e24b57430cbeafd4d7696429f1a2fa8eb26b6a18f5d15f8e84282f997658272261c9195ab0665b051d53077113f5bd73827a25e7c6774d37f41d25d"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-ff68195a4ced8f614cdad6aba781419dc637b4e2b6e4900edacee4389cec977f0d8c3a51435dbbd552d13ada73017d7f543d72759f18cab951d86ef755ff8492"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-ff68195a4ced8f614cdad6aba781419dc637b4e2b6e4900edacee4389cec977f0d8c3a51435dbbd552d13ada73017d7f543d72759f18cab951d86ef755ff8492"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-ff68195a4ced8f614cdad6aba781419dc637b4e2b6e4900edacee4389cec977f0d8c3a51435dbbd552d13ada73017d7f543d72759f18cab951d86ef755ff8492"' :
                                            'id="xs-controllers-links-module-AuthModule-ff68195a4ced8f614cdad6aba781419dc637b4e2b6e4900edacee4389cec977f0d8c3a51435dbbd552d13ada73017d7f543d72759f18cab951d86ef755ff8492"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-ff68195a4ced8f614cdad6aba781419dc637b4e2b6e4900edacee4389cec977f0d8c3a51435dbbd552d13ada73017d7f543d72759f18cab951d86ef755ff8492"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-ff68195a4ced8f614cdad6aba781419dc637b4e2b6e4900edacee4389cec977f0d8c3a51435dbbd552d13ada73017d7f543d72759f18cab951d86ef755ff8492"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-ff68195a4ced8f614cdad6aba781419dc637b4e2b6e4900edacee4389cec977f0d8c3a51435dbbd552d13ada73017d7f543d72759f18cab951d86ef755ff8492"' :
                                        'id="xs-injectables-links-module-AuthModule-ff68195a4ced8f614cdad6aba781419dc637b4e2b6e4900edacee4389cec977f0d8c3a51435dbbd552d13ada73017d7f543d72759f18cab951d86ef755ff8492"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DaftarAssetModule.html" data-type="entity-link" >DaftarAssetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DaftarAssetModule-49c6d3f36c24dedba30f76b00eff02bb9ede93cbb60ef1972fc41210d776dc2e3953d1debfa3c5ae97c0481e3c1a623660adfe0ff58100fc28766b51b6f85108"' : 'data-bs-target="#xs-controllers-links-module-DaftarAssetModule-49c6d3f36c24dedba30f76b00eff02bb9ede93cbb60ef1972fc41210d776dc2e3953d1debfa3c5ae97c0481e3c1a623660adfe0ff58100fc28766b51b6f85108"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DaftarAssetModule-49c6d3f36c24dedba30f76b00eff02bb9ede93cbb60ef1972fc41210d776dc2e3953d1debfa3c5ae97c0481e3c1a623660adfe0ff58100fc28766b51b6f85108"' :
                                            'id="xs-controllers-links-module-DaftarAssetModule-49c6d3f36c24dedba30f76b00eff02bb9ede93cbb60ef1972fc41210d776dc2e3953d1debfa3c5ae97c0481e3c1a623660adfe0ff58100fc28766b51b6f85108"' }>
                                            <li class="link">
                                                <a href="controllers/DaftarAssetController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DaftarAssetController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DaftarAssetModule-49c6d3f36c24dedba30f76b00eff02bb9ede93cbb60ef1972fc41210d776dc2e3953d1debfa3c5ae97c0481e3c1a623660adfe0ff58100fc28766b51b6f85108"' : 'data-bs-target="#xs-injectables-links-module-DaftarAssetModule-49c6d3f36c24dedba30f76b00eff02bb9ede93cbb60ef1972fc41210d776dc2e3953d1debfa3c5ae97c0481e3c1a623660adfe0ff58100fc28766b51b6f85108"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DaftarAssetModule-49c6d3f36c24dedba30f76b00eff02bb9ede93cbb60ef1972fc41210d776dc2e3953d1debfa3c5ae97c0481e3c1a623660adfe0ff58100fc28766b51b6f85108"' :
                                        'id="xs-injectables-links-module-DaftarAssetModule-49c6d3f36c24dedba30f76b00eff02bb9ede93cbb60ef1972fc41210d776dc2e3953d1debfa3c5ae97c0481e3c1a623660adfe0ff58100fc28766b51b6f85108"' }>
                                        <li class="link">
                                            <a href="injectables/DaftarAssetService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DaftarAssetService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DaftarAssetTemporaryModule.html" data-type="entity-link" >DaftarAssetTemporaryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DaftarAssetTemporaryModule-23aa7cf00fda6eb1878c15a221fdc6303720892827c65b922c855fa0d51ad32c841a62ca0dc5d14d98ffff8b1a68ad692c17133ba4b3f7daa4b012ab46596103"' : 'data-bs-target="#xs-controllers-links-module-DaftarAssetTemporaryModule-23aa7cf00fda6eb1878c15a221fdc6303720892827c65b922c855fa0d51ad32c841a62ca0dc5d14d98ffff8b1a68ad692c17133ba4b3f7daa4b012ab46596103"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DaftarAssetTemporaryModule-23aa7cf00fda6eb1878c15a221fdc6303720892827c65b922c855fa0d51ad32c841a62ca0dc5d14d98ffff8b1a68ad692c17133ba4b3f7daa4b012ab46596103"' :
                                            'id="xs-controllers-links-module-DaftarAssetTemporaryModule-23aa7cf00fda6eb1878c15a221fdc6303720892827c65b922c855fa0d51ad32c841a62ca0dc5d14d98ffff8b1a68ad692c17133ba4b3f7daa4b012ab46596103"' }>
                                            <li class="link">
                                                <a href="controllers/DaftarAssetTemporaryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DaftarAssetTemporaryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DaftarAssetTemporaryModule-23aa7cf00fda6eb1878c15a221fdc6303720892827c65b922c855fa0d51ad32c841a62ca0dc5d14d98ffff8b1a68ad692c17133ba4b3f7daa4b012ab46596103"' : 'data-bs-target="#xs-injectables-links-module-DaftarAssetTemporaryModule-23aa7cf00fda6eb1878c15a221fdc6303720892827c65b922c855fa0d51ad32c841a62ca0dc5d14d98ffff8b1a68ad692c17133ba4b3f7daa4b012ab46596103"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DaftarAssetTemporaryModule-23aa7cf00fda6eb1878c15a221fdc6303720892827c65b922c855fa0d51ad32c841a62ca0dc5d14d98ffff8b1a68ad692c17133ba4b3f7daa4b012ab46596103"' :
                                        'id="xs-injectables-links-module-DaftarAssetTemporaryModule-23aa7cf00fda6eb1878c15a221fdc6303720892827c65b922c855fa0d51ad32c841a62ca0dc5d14d98ffff8b1a68ad692c17133ba4b3f7daa4b012ab46596103"' }>
                                        <li class="link">
                                            <a href="injectables/DaftarAssetTemporaryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DaftarAssetTemporaryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DaftarPenggunaModule.html" data-type="entity-link" >DaftarPenggunaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DaftarPenggunaModule-25f44b8f3925e9eae0d305cd0b2e069948e9e31053f65d58ba9a8b111b032e72457b7c03348274d64bf80224a7d9664a8760c2346d63b6588ab7faffb99b12e8"' : 'data-bs-target="#xs-controllers-links-module-DaftarPenggunaModule-25f44b8f3925e9eae0d305cd0b2e069948e9e31053f65d58ba9a8b111b032e72457b7c03348274d64bf80224a7d9664a8760c2346d63b6588ab7faffb99b12e8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DaftarPenggunaModule-25f44b8f3925e9eae0d305cd0b2e069948e9e31053f65d58ba9a8b111b032e72457b7c03348274d64bf80224a7d9664a8760c2346d63b6588ab7faffb99b12e8"' :
                                            'id="xs-controllers-links-module-DaftarPenggunaModule-25f44b8f3925e9eae0d305cd0b2e069948e9e31053f65d58ba9a8b111b032e72457b7c03348274d64bf80224a7d9664a8760c2346d63b6588ab7faffb99b12e8"' }>
                                            <li class="link">
                                                <a href="controllers/DaftarPenggunaController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DaftarPenggunaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DaftarPenggunaModule-25f44b8f3925e9eae0d305cd0b2e069948e9e31053f65d58ba9a8b111b032e72457b7c03348274d64bf80224a7d9664a8760c2346d63b6588ab7faffb99b12e8"' : 'data-bs-target="#xs-injectables-links-module-DaftarPenggunaModule-25f44b8f3925e9eae0d305cd0b2e069948e9e31053f65d58ba9a8b111b032e72457b7c03348274d64bf80224a7d9664a8760c2346d63b6588ab7faffb99b12e8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DaftarPenggunaModule-25f44b8f3925e9eae0d305cd0b2e069948e9e31053f65d58ba9a8b111b032e72457b7c03348274d64bf80224a7d9664a8760c2346d63b6588ab7faffb99b12e8"' :
                                        'id="xs-injectables-links-module-DaftarPenggunaModule-25f44b8f3925e9eae0d305cd0b2e069948e9e31053f65d58ba9a8b111b032e72457b7c03348274d64bf80224a7d9664a8760c2346d63b6588ab7faffb99b12e8"' }>
                                        <li class="link">
                                            <a href="injectables/DaftarPenggunaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DaftarPenggunaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/KategoriModule.html" data-type="entity-link" >KategoriModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-KategoriModule-cf33e48ffe4a2dd2c2f365b7ae364839e1d02951c4b4df3664af12cae62d31a0ed2c87fbcb8237c37178cbf72a0bf61320d000f5f0c650e0389cb304e677eb71"' : 'data-bs-target="#xs-controllers-links-module-KategoriModule-cf33e48ffe4a2dd2c2f365b7ae364839e1d02951c4b4df3664af12cae62d31a0ed2c87fbcb8237c37178cbf72a0bf61320d000f5f0c650e0389cb304e677eb71"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-KategoriModule-cf33e48ffe4a2dd2c2f365b7ae364839e1d02951c4b4df3664af12cae62d31a0ed2c87fbcb8237c37178cbf72a0bf61320d000f5f0c650e0389cb304e677eb71"' :
                                            'id="xs-controllers-links-module-KategoriModule-cf33e48ffe4a2dd2c2f365b7ae364839e1d02951c4b4df3664af12cae62d31a0ed2c87fbcb8237c37178cbf72a0bf61320d000f5f0c650e0389cb304e677eb71"' }>
                                            <li class="link">
                                                <a href="controllers/KategoriController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KategoriController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-KategoriModule-cf33e48ffe4a2dd2c2f365b7ae364839e1d02951c4b4df3664af12cae62d31a0ed2c87fbcb8237c37178cbf72a0bf61320d000f5f0c650e0389cb304e677eb71"' : 'data-bs-target="#xs-injectables-links-module-KategoriModule-cf33e48ffe4a2dd2c2f365b7ae364839e1d02951c4b4df3664af12cae62d31a0ed2c87fbcb8237c37178cbf72a0bf61320d000f5f0c650e0389cb304e677eb71"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-KategoriModule-cf33e48ffe4a2dd2c2f365b7ae364839e1d02951c4b4df3664af12cae62d31a0ed2c87fbcb8237c37178cbf72a0bf61320d000f5f0c650e0389cb304e677eb71"' :
                                        'id="xs-injectables-links-module-KategoriModule-cf33e48ffe4a2dd2c2f365b7ae364839e1d02951c4b4df3664af12cae62d31a0ed2c87fbcb8237c37178cbf72a0bf61320d000f5f0c650e0389cb304e677eb71"' }>
                                        <li class="link">
                                            <a href="injectables/KategoriService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KategoriService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LatihanModule.html" data-type="entity-link" >LatihanModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' : 'data-bs-target="#xs-controllers-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' :
                                            'id="xs-controllers-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' }>
                                            <li class="link">
                                                <a href="controllers/LatihanController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatihanController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' : 'data-bs-target="#xs-injectables-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' :
                                        'id="xs-injectables-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' }>
                                        <li class="link">
                                            <a href="injectables/LatihanService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatihanService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' :
                                        'id="xs-injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RiwayatAssetModule.html" data-type="entity-link" >RiwayatAssetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RiwayatAssetModule-94ce6213408f1a3cf4f8ea96d789d84b82ad2e253a1e5dc96b4ef98f560b47713145f1b5120ab11c2289e75b4a196ffb53c6a0f2c5d25c2b1202bd871b74c02d"' : 'data-bs-target="#xs-controllers-links-module-RiwayatAssetModule-94ce6213408f1a3cf4f8ea96d789d84b82ad2e253a1e5dc96b4ef98f560b47713145f1b5120ab11c2289e75b4a196ffb53c6a0f2c5d25c2b1202bd871b74c02d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RiwayatAssetModule-94ce6213408f1a3cf4f8ea96d789d84b82ad2e253a1e5dc96b4ef98f560b47713145f1b5120ab11c2289e75b4a196ffb53c6a0f2c5d25c2b1202bd871b74c02d"' :
                                            'id="xs-controllers-links-module-RiwayatAssetModule-94ce6213408f1a3cf4f8ea96d789d84b82ad2e253a1e5dc96b4ef98f560b47713145f1b5120ab11c2289e75b4a196ffb53c6a0f2c5d25c2b1202bd871b74c02d"' }>
                                            <li class="link">
                                                <a href="controllers/RiwayatAssetController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RiwayatAssetController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RiwayatAssetModule-94ce6213408f1a3cf4f8ea96d789d84b82ad2e253a1e5dc96b4ef98f560b47713145f1b5120ab11c2289e75b4a196ffb53c6a0f2c5d25c2b1202bd871b74c02d"' : 'data-bs-target="#xs-injectables-links-module-RiwayatAssetModule-94ce6213408f1a3cf4f8ea96d789d84b82ad2e253a1e5dc96b4ef98f560b47713145f1b5120ab11c2289e75b4a196ffb53c6a0f2c5d25c2b1202bd871b74c02d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RiwayatAssetModule-94ce6213408f1a3cf4f8ea96d789d84b82ad2e253a1e5dc96b4ef98f560b47713145f1b5120ab11c2289e75b4a196ffb53c6a0f2c5d25c2b1202bd871b74c02d"' :
                                        'id="xs-injectables-links-module-RiwayatAssetModule-94ce6213408f1a3cf4f8ea96d789d84b82ad2e253a1e5dc96b4ef98f560b47713145f1b5120ab11c2289e75b4a196ffb53c6a0f2c5d25c2b1202bd871b74c02d"' }>
                                        <li class="link">
                                            <a href="injectables/RiwayatAssetService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RiwayatAssetService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RiwayatAssetTemporaryModule.html" data-type="entity-link" >RiwayatAssetTemporaryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RiwayatAssetTemporaryModule-0aeff9f6eb85c2621ef6e4835139d4feb2b76c400f4aa20ced1a560fe40afda4c3439cb108014494fc3965fc459c6aca6be2f80249f75aa51c4a82d1241ad419"' : 'data-bs-target="#xs-controllers-links-module-RiwayatAssetTemporaryModule-0aeff9f6eb85c2621ef6e4835139d4feb2b76c400f4aa20ced1a560fe40afda4c3439cb108014494fc3965fc459c6aca6be2f80249f75aa51c4a82d1241ad419"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RiwayatAssetTemporaryModule-0aeff9f6eb85c2621ef6e4835139d4feb2b76c400f4aa20ced1a560fe40afda4c3439cb108014494fc3965fc459c6aca6be2f80249f75aa51c4a82d1241ad419"' :
                                            'id="xs-controllers-links-module-RiwayatAssetTemporaryModule-0aeff9f6eb85c2621ef6e4835139d4feb2b76c400f4aa20ced1a560fe40afda4c3439cb108014494fc3965fc459c6aca6be2f80249f75aa51c4a82d1241ad419"' }>
                                            <li class="link">
                                                <a href="controllers/RiwayatAssetTemporaryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RiwayatAssetTemporaryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RiwayatAssetTemporaryModule-0aeff9f6eb85c2621ef6e4835139d4feb2b76c400f4aa20ced1a560fe40afda4c3439cb108014494fc3965fc459c6aca6be2f80249f75aa51c4a82d1241ad419"' : 'data-bs-target="#xs-injectables-links-module-RiwayatAssetTemporaryModule-0aeff9f6eb85c2621ef6e4835139d4feb2b76c400f4aa20ced1a560fe40afda4c3439cb108014494fc3965fc459c6aca6be2f80249f75aa51c4a82d1241ad419"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RiwayatAssetTemporaryModule-0aeff9f6eb85c2621ef6e4835139d4feb2b76c400f4aa20ced1a560fe40afda4c3439cb108014494fc3965fc459c6aca6be2f80249f75aa51c4a82d1241ad419"' :
                                        'id="xs-injectables-links-module-RiwayatAssetTemporaryModule-0aeff9f6eb85c2621ef6e4835139d4feb2b76c400f4aa20ced1a560fe40afda4c3439cb108014494fc3965fc459c6aca6be2f80249f75aa51c4a82d1241ad419"' }>
                                        <li class="link">
                                            <a href="injectables/RiwayatAssetTemporaryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RiwayatAssetTemporaryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SatkerModule.html" data-type="entity-link" >SatkerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SatkerModule-ab1229aca79c8e49b2564c5b2725df4284437070d7f4e0c023f1ece2a45b2081b1ec1a3564ea8879e560edb0b36ddd0176dd6ce7fbeb6c3ffdd978f30485a893"' : 'data-bs-target="#xs-controllers-links-module-SatkerModule-ab1229aca79c8e49b2564c5b2725df4284437070d7f4e0c023f1ece2a45b2081b1ec1a3564ea8879e560edb0b36ddd0176dd6ce7fbeb6c3ffdd978f30485a893"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SatkerModule-ab1229aca79c8e49b2564c5b2725df4284437070d7f4e0c023f1ece2a45b2081b1ec1a3564ea8879e560edb0b36ddd0176dd6ce7fbeb6c3ffdd978f30485a893"' :
                                            'id="xs-controllers-links-module-SatkerModule-ab1229aca79c8e49b2564c5b2725df4284437070d7f4e0c023f1ece2a45b2081b1ec1a3564ea8879e560edb0b36ddd0176dd6ce7fbeb6c3ffdd978f30485a893"' }>
                                            <li class="link">
                                                <a href="controllers/SatkerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SatkerController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SatkerModule-ab1229aca79c8e49b2564c5b2725df4284437070d7f4e0c023f1ece2a45b2081b1ec1a3564ea8879e560edb0b36ddd0176dd6ce7fbeb6c3ffdd978f30485a893"' : 'data-bs-target="#xs-injectables-links-module-SatkerModule-ab1229aca79c8e49b2564c5b2725df4284437070d7f4e0c023f1ece2a45b2081b1ec1a3564ea8879e560edb0b36ddd0176dd6ce7fbeb6c3ffdd978f30485a893"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SatkerModule-ab1229aca79c8e49b2564c5b2725df4284437070d7f4e0c023f1ece2a45b2081b1ec1a3564ea8879e560edb0b36ddd0176dd6ce7fbeb6c3ffdd978f30485a893"' :
                                        'id="xs-injectables-links-module-SatkerModule-ab1229aca79c8e49b2564c5b2725df4284437070d7f4e0c023f1ece2a45b2081b1ec1a3564ea8879e560edb0b36ddd0176dd6ce7fbeb6c3ffdd978f30485a893"' }>
                                        <li class="link">
                                            <a href="injectables/SatkerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SatkerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolModule.html" data-type="entity-link" >SchoolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SchoolModule-d971446a974e748cc7a731ec4412da2079c69e3101810bde80cbb3decb14bfc0869f500ee0b2cf3217192ccf5fb05d65e414ee35263976ebfdcf3a8c1c0b1447"' : 'data-bs-target="#xs-controllers-links-module-SchoolModule-d971446a974e748cc7a731ec4412da2079c69e3101810bde80cbb3decb14bfc0869f500ee0b2cf3217192ccf5fb05d65e414ee35263976ebfdcf3a8c1c0b1447"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SchoolModule-d971446a974e748cc7a731ec4412da2079c69e3101810bde80cbb3decb14bfc0869f500ee0b2cf3217192ccf5fb05d65e414ee35263976ebfdcf3a8c1c0b1447"' :
                                            'id="xs-controllers-links-module-SchoolModule-d971446a974e748cc7a731ec4412da2079c69e3101810bde80cbb3decb14bfc0869f500ee0b2cf3217192ccf5fb05d65e414ee35263976ebfdcf3a8c1c0b1447"' }>
                                            <li class="link">
                                                <a href="controllers/SchoolController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SchoolModule-d971446a974e748cc7a731ec4412da2079c69e3101810bde80cbb3decb14bfc0869f500ee0b2cf3217192ccf5fb05d65e414ee35263976ebfdcf3a8c1c0b1447"' : 'data-bs-target="#xs-injectables-links-module-SchoolModule-d971446a974e748cc7a731ec4412da2079c69e3101810bde80cbb3decb14bfc0869f500ee0b2cf3217192ccf5fb05d65e414ee35263976ebfdcf3a8c1c0b1447"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SchoolModule-d971446a974e748cc7a731ec4412da2079c69e3101810bde80cbb3decb14bfc0869f500ee0b2cf3217192ccf5fb05d65e414ee35263976ebfdcf3a8c1c0b1447"' :
                                        'id="xs-injectables-links-module-SchoolModule-d971446a974e748cc7a731ec4412da2079c69e3101810bde80cbb3decb14bfc0869f500ee0b2cf3217192ccf5fb05d65e414ee35263976ebfdcf3a8c1c0b1447"' }>
                                        <li class="link">
                                            <a href="injectables/SchoolService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link" >TaskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' : 'data-bs-target="#xs-controllers-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' :
                                            'id="xs-controllers-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' }>
                                            <li class="link">
                                                <a href="controllers/TaskController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' : 'data-bs-target="#xs-injectables-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' :
                                        'id="xs-injectables-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' }>
                                        <li class="link">
                                            <a href="injectables/TaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AdminPenggunaController.html" data-type="entity-link" >AdminPenggunaController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DaftarAssetController.html" data-type="entity-link" >DaftarAssetController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DaftarAssetTemporaryController.html" data-type="entity-link" >DaftarAssetTemporaryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DaftarPenggunaController.html" data-type="entity-link" >DaftarPenggunaController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/KategoriController.html" data-type="entity-link" >KategoriController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LatihanController.html" data-type="entity-link" >LatihanController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RiwayatAssetController.html" data-type="entity-link" >RiwayatAssetController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RiwayatAssetTemporaryController.html" data-type="entity-link" >RiwayatAssetTemporaryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SatkerController.html" data-type="entity-link" >SatkerController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SchoolController.html" data-type="entity-link" >SchoolController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TaskController.html" data-type="entity-link" >TaskController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AdminPengguna.html" data-type="entity-link" >AdminPengguna</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAdminPenggunaDto.html" data-type="entity-link" >CreateAdminPenggunaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDaftarAssetDto.html" data-type="entity-link" >CreateDaftarAssetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDaftarAssetTemporaryDto.html" data-type="entity-link" >CreateDaftarAssetTemporaryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDaftarPenggunaDto.html" data-type="entity-link" >CreateDaftarPenggunaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateKategoriDto.html" data-type="entity-link" >CreateKategoriDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRiwayatAssetDto.html" data-type="entity-link" >CreateRiwayatAssetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRiwayatAssetTemporaryDto.html" data-type="entity-link" >CreateRiwayatAssetTemporaryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSatkerDto.html" data-type="entity-link" >CreateSatkerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSchoolDto.html" data-type="entity-link" >CreateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTaskDto.html" data-type="entity-link" >CreateTaskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DaftarAsset.html" data-type="entity-link" >DaftarAsset</a>
                            </li>
                            <li class="link">
                                <a href="classes/DaftarAssetTemporary.html" data-type="entity-link" >DaftarAssetTemporary</a>
                            </li>
                            <li class="link">
                                <a href="classes/DaftarPengguna.html" data-type="entity-link" >DaftarPengguna</a>
                            </li>
                            <li class="link">
                                <a href="classes/Kategori.html" data-type="entity-link" >Kategori</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RiwayatAsset.html" data-type="entity-link" >RiwayatAsset</a>
                            </li>
                            <li class="link">
                                <a href="classes/RiwayatAssetTemporary.html" data-type="entity-link" >RiwayatAssetTemporary</a>
                            </li>
                            <li class="link">
                                <a href="classes/Satker.html" data-type="entity-link" >Satker</a>
                            </li>
                            <li class="link">
                                <a href="classes/School.html" data-type="entity-link" >School</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAdminPenggunaDto.html" data-type="entity-link" >UpdateAdminPenggunaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDaftarAssetDto.html" data-type="entity-link" >UpdateDaftarAssetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDaftarAssetTemporaryDto.html" data-type="entity-link" >UpdateDaftarAssetTemporaryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDaftarPenggunaDto.html" data-type="entity-link" >UpdateDaftarPenggunaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateKategoriDto.html" data-type="entity-link" >UpdateKategoriDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRiwayatAssetDto.html" data-type="entity-link" >UpdateRiwayatAssetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRiwayatAssetTemporaryDto.html" data-type="entity-link" >UpdateRiwayatAssetTemporaryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSatkerDto.html" data-type="entity-link" >UpdateSatkerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSchoolDto.html" data-type="entity-link" >UpdateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTaskDto.html" data-type="entity-link" >UpdateTaskDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdminPenggunaService.html" data-type="entity-link" >AdminPenggunaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DaftarAssetService.html" data-type="entity-link" >DaftarAssetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DaftarAssetTemporaryService.html" data-type="entity-link" >DaftarAssetTemporaryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DaftarPenggunaService.html" data-type="entity-link" >DaftarPenggunaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KategoriService.html" data-type="entity-link" >KategoriService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LatihanService.html" data-type="entity-link" >LatihanService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RiwayatAssetService.html" data-type="entity-link" >RiwayatAssetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RiwayatAssetTemporaryService.html" data-type="entity-link" >RiwayatAssetTemporaryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SatkerService.html" data-type="entity-link" >SatkerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SchoolService.html" data-type="entity-link" >SchoolService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaskService.html" data-type="entity-link" >TaskService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Task.html" data-type="entity-link" >Task</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});