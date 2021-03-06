import { OnDestroy, Renderer2, ElementRef, EventEmitter, SimpleChanges, NgZone, TemplateRef } from '@angular/core';
import { NgOption } from './ng-select.types';
import { NgSelectComponent, DropdownPosition } from './ng-select.component';
import { WindowService } from './window.service';
import { VirtualScrollService } from './virtual-scroll.service';
export declare class NgDropdownPanelComponent implements OnDestroy {
    private _renderer;
    private _elementRef;
    private _zone;
    private _virtualScrollService;
    private _window;
    items: NgOption[];
    position: DropdownPosition;
    appendTo: string;
    bufferAmount: number;
    virtualScroll: boolean;
    headerTemplate: TemplateRef<any>;
    footerTemplate: TemplateRef<any>;
    update: EventEmitter<any[]>;
    scrollToEnd: EventEmitter<{
        start: number;
        end: number;
    }>;
    positionChange: EventEmitter<{}>;
    contentElementRef: ElementRef;
    scrollElementRef: ElementRef;
    paddingElementRef: ElementRef;
    currentPosition: DropdownPosition;
    private _selectElementRef;
    private _previousStart;
    private _previousEnd;
    private _startupLoop;
    private _isScrolledToMarked;
    private _scrollToEndFired;
    private _itemsList;
    private _disposeScrollListener;
    private _disposeDocumentResizeListener;
    constructor(_ngSelect: NgSelectComponent, _renderer: Renderer2, _elementRef: ElementRef, _zone: NgZone, _virtualScrollService: VirtualScrollService, _window: WindowService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    refresh(): void;
    scrollInto(item: NgOption): void;
    scrollIntoTag(): void;
    private _handleScroll();
    private _handleItemsChange(items);
    private _updateItems();
    private _fireScrollToEnd();
    private _calculateDimensions(index?);
    private _handleDocumentResize();
    private _scrollToMarked();
    private _handleAppendTo();
    private _updateDropdownPosition();
    private _autoPositionDropdown();
}
