package com.payroll.api.resourse

import com.payroll.api.Payroll
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController("api/payroll")
@CrossOrigin(origins = ["*"], allowCredentials = "true", allowedHeaders = ["*"])
class PayrollResource {

    @GetMapping
    fun getPayroll(): Array<Payroll> {
        return arrayOf(Payroll(5), Payroll(40))
    }
}