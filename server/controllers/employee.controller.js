const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

employeeCtrl.createEmployee = async (req, res) =>{
   const employee = await new Employee ({
       name: req.body.name,
       position: req.body.position,
       office: req.body.office,
       salary: req.body.salary
   });
    await employee.save();
    res.json('save');

}

employeeCtrl.getEmployee = async (req, res) =>{

    const employee = await Employee.findById(req.params.id);
    res.json(employee);
}

employeeCtrl.editEmployee = async(req, res )=>{
   const {id} = req.params;
   const employee = {
       name: req.body.name,
       position: req.body.position,
       office: req.body.office,
       salary: req.body.salary
   };
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({
        status:'Employee Updated'
    });

}

employeeCtrl.deleteEmployee = async (req,res)=>{
   await Employee.findByIdAndRemove(req.params.id);
   res.jason({
    status: 'employee deleted'
   });
}
module.exports = employeeCtrl;