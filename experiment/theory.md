### Theory

A multivibrator is an electronic circuit that is used to implement two-state devices like oscillators, timers, and flip-flops. Two states refer to two voltage levels of multivibrators.
For e.g.: High and low in digital circuits. is nothing but a switching circuit.  
 A multivibrator generates non-sinusoidal waves such as square waves, rectangular waves, saw tooth waves, etc. Multivibrators are used as frequency generators, frequency dividers, and generators of time delays and as memory elements in computers, etc.

**1. Monostable Multivibrator using Op-Amp**  
 This kind of multivibrator is one in which one of the states is stable, but the other state is unstable (transient). A trigger pulse causes the circuit to enter an unstable state. After entering the unstable state, the circuit will return to the stable state after a set time. Such a circuit is useful for creating a timing period of fixed duration in response to some external event. The feedback from the output is fed to the non-inverting terminal. Hence, feedback is positive. Consider there are two saturation states <img src="images/fm2.png" />

<center>
    
<img width="40%" src="images/monostable.png" />

</center>
<br>

V<sub>in</sub> ⟹Input voltage  
V<sub>o</sub> ⟹ Output voltage  
Power Supply (+15V, -15V) ⟹ The voltage sources supply power to the op-amp.
At this time, the voltage at non-inverting terminal

<center>
    
<img src="images/equation1.png" />

</center>
<br>

where &beta; is the feedback factor

Diode, D will be in forward bias when <img src="images/fm1.png" />

<br>
<center>

   <img width="40%" src="images/img1.jpg" />

</center>

So, the voltage across the capacitor = forward voltage drop across the diode
At time t, a negative trigger is applied at the non-inverting node. Then the voltage at the non-inverting node momentarily becomes less than the voltage at inverting node. So, the output switches from <img src="images/fm3.png" />.

Now, the voltage at the non-inverting node will be <img src="images/fm4.png" />.

<center>
    
<img src="images/equation2.png" />

</center>

When <img src="images/fm3.png" /> , the diode will be in reverse bias and the capacitor charging towards <img src="images/fm4.png" />.

As soon as the voltage at the inverting node goes below, <img src="images/fm4.png" />, the output voltage switches from <img src="images/vsatnegative.png" />. The output remains in an unstable state till the time T. Then the diode becomes forward bias once again and the voltage drop across the capacitor = forward voltage drop across the diode.

<center>

<br>

**How to find T**

</center>

Assume the diode is ideal ⟹ voltage drop across the capacitor is zero. Hence, the capacitor starts charging from 0 V to <img src="images/fm4.png" />.

<center>
    
<img width="40%" src="images/img2.png" />

</center>

<br>
   Here, <img src="images/vinitial.png" />

<center>

<img src="images/formula1.png" />

</center>
<br>
<center>

<img src="images/formula2.png" />

</center>
<br>
<center>

<img src="images/formula3.png" />

</center>
<br>
<center>

<img src="images/formula4.png" />

</center>
<br>
<center>

<img src="images/formula5.png" />

</center>
 <br>  
<center>

<img src="images/formula6.png" />

</center>

<br> 
<center>

<img src="images/formula7.png" />

</center>
<br>
<center>

<img src="images/formula8.png" />, where τ=RC

</center>

<center>

Trigger signal time period should be ˂ T

</center>

<br>

**2. Bistable Multivibrator Using op-Amp**

In the bistable multivibrator, the circuit is stable in either state. It can be flipped from one state to the other by an external trigger pulse. This circuit is also known as a latch. It can store one bit of information and is widely used in digital logic and computer memory.

<br>

<center>
    
<img width="40%" src="images/bistable.png" />

</center>

<br>

<center>

<img src="images/bform1.png" />

</center>
<br>

Where V<sub>d</sub> is the differential voltage

<center>

<img src="images/bform2.png" />

</center>
<br>
<center>

<img src="images/bform3.png" />

</center>
<br>
<center>

<img src="images/bform4.png" />

</center>
<br>
<center>

<img src="images/bform5.png" />

</center>
<br>

Case I) Let <img src="images/bform3.png" />

<center>

<img src="images/bform6.png" />

</center>

After time t1, apply trigger

<center>
  <img src="images/biformula.png" />

If

If <img src="images/biformula1.png" />

</center>
 
<center>

<img src="images/bform7.png" />

</center>

Case I) Let <img src="images/bform5.png" />

<center>

<img src="images/bform8.png" />

</center>

After time t2, apply trigger

<center>

   <img src="images/biformula2.png" />
   </center>
<br>

<center>
   If  <img src="images/biformula3.png" />
</center>
<br>
<center>
<img src="images/bform9.png" />
</center>

<br>
<center>
    
<img width="40%" src="images/img3.png" />

</center>
