<?php

namespace App\Http\Livewire\Events;

use App\Models\Category;
use App\Models\Event;
use Livewire\Component;

class Categories extends Component
{
    public $category, $categories, $event, $formUpdate = false, $name, $weight, $age, $type, $gender;
    public $rules = [
        'name' => 'required|string|max:255',
        'weight' => 'required',
        'age' => 'required',
        'gender' => 'required|in:male,female',
        'type' => 'required|in:individual,group',
    ];

    public function mount(Event $event)
    {
        $this->event = $event;
        $this->tableCategory();
    }

    public function tableCategory()
    {
        $this->categories = Category::where('event_id', $this->event->id)->latest()->get();
    }
    public function render()
    {
        return view('livewire.events.categories', [
            'categories' => $this->categories,
        ]);
    }

    public function store()
    {
        $category = $this->validate();
        $category['event_id'] = $this->event->id;
        Category::create($category);

        $this->tableCategory();
        $this->reset(['name', 'weight', 'age', 'type', 'gender']);
    }

    public function show($id)
    {
        $this->formUpdate = true;
        $category = Category::find($id);
        $this->category = $category;
        $this->name = $category->name;
        $this->weight = $category->weight;
        $this->age = $category->age;
        $this->type = $category->type;
        $this->gender = $category->gender;
    }

    public function update()
    {
        $category = $this->category;
        $category->update($this->validate());
        $this->reset(['name', 'weight', 'age', 'type', 'gender']);
        $this->formUpdate = false;
        $this->tableCategory();
    }

    public function destroy($id)
    {
        $category = Category::find($id);
        $category->delete();
        $this->reset(['name', 'weight', 'age', 'type', 'gender']);
        $this->tableCategory();
    }
}
