import { NgModule } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { AccordionModule } from 'primeng/accordion'
import { MenuModule } from 'primeng/menu'
import { DragDropModule } from 'primeng/dragdrop'
import { PanelModule } from 'primeng/panel'
import { TableModule } from 'primeng/table'
import { TabViewModule } from 'primeng/tabview'
import { CodeHighlighterModule } from 'primeng/codehighlighter'
import { ScrollPanelModule } from 'primeng/scrollpanel'
import { DropdownModule } from 'primeng/dropdown'
import { DialogModule } from 'primeng/dialog'
import { FieldsetModule } from 'primeng/fieldset'
import { MultiSelectModule } from 'primeng/multiselect'
import { ListboxModule } from 'primeng/listbox'
import { OverlayPanelModule } from 'primeng/overlaypanel'
import { SplitButtonModule } from 'primeng/splitbutton'
import { CardModule } from 'primeng/card'
import { DividerModule } from 'primeng/divider'

@NgModule({
  declarations: [],
  exports: [
    AccordionModule,
    ButtonModule,
    MenuModule,
    DragDropModule,
    PanelModule,
    TableModule,
    TabViewModule,
    CodeHighlighterModule,
    ScrollPanelModule,
    DropdownModule,
    DialogModule,
    FieldsetModule,
    MultiSelectModule,
    ListboxModule,
    OverlayPanelModule,
    SplitButtonModule,
    CardModule,
    DividerModule
  ]
})
export class PrimengModule { }
