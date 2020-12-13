import { ComponentFactory, ComponentFactoryResolver, Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Status } from '@modules/common';

import { EmptyDataComponent } from '../components/empty-data/empty-data.component';
import { ErrorMessageComponent } from '../components/error-message/error-message.component';
import { LoadingIndicatorComponent } from '../components/loading-indicator/loading-indicator.component';

@Directive({
    selector: '[bmModelView]'
})
export class ModelViewDirective implements OnChanges {
    private status: Status;

    @Input('bmModelView')
    set Status(value: Status) {
        this.status = value;
    }

    constructor(
        private readonly templateRef: TemplateRef<any>,
        private readonly viewContainerRef: ViewContainerRef,
        private readonly componentFactoryResolver: ComponentFactoryResolver
    ) {}

    public ngOnChanges(): void {
        this.viewContainerRef.clear();

        switch (this.status) {
            case Status.ERROR:
                this.viewContainerRef.createComponent(this.createErrorComponent());
                break;
            case Status.PENDING:
                this.viewContainerRef.createComponent(this.createLoadingComponent());
                break;
            case Status.EMPTY:
                this.viewContainerRef.createComponent(this.createEmptyComponent());
                break;
            default:
                this.viewContainerRef.createEmbeddedView(this.templateRef);
                break;
        }
    }

    private createLoadingComponent(): ComponentFactory<LoadingIndicatorComponent> {
        const component: ComponentFactory<LoadingIndicatorComponent> = this.componentFactoryResolver
            .resolveComponentFactory<LoadingIndicatorComponent>(LoadingIndicatorComponent);

        return component;
    }

    private createErrorComponent(): ComponentFactory<ErrorMessageComponent> {
        const component: ComponentFactory<ErrorMessageComponent> = this.componentFactoryResolver
            .resolveComponentFactory<ErrorMessageComponent>(ErrorMessageComponent);

        return component;
    }

    private createEmptyComponent(): ComponentFactory<EmptyDataComponent> {
        const component: ComponentFactory<EmptyDataComponent> = this.componentFactoryResolver
            .resolveComponentFactory<EmptyDataComponent>(EmptyDataComponent);

        return component;
    }
}